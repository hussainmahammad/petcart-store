#!/bin/bash
set -e

CLUSTER_NAME="petcart-eks"
REGION="us-east-1"
POLICY_NAME="AWSLoadBalancerControllerIAMPolicy"
SERVICE_ACCOUNT_NAME="aws-load-balancer-controller"
NAMESPACE="kube-system"

ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

echo "👉 Associating OIDC provider"
eksctl utils associate-iam-oidc-provider \
  --region ${REGION} \
  --cluster ${CLUSTER_NAME} \
  --approve || true

echo "👉 Creating IAM policy (if not exists)"
aws iam create-policy \
  --policy-name ${POLICY_NAME} \
  --policy-document file://files/eks/alb-controller/iam-policy.json \
  >/dev/null 2>&1 || true

POLICY_ARN="arn:aws:iam::${ACCOUNT_ID}:policy/${POLICY_NAME}"

echo "👉 Creating IAM service account (IRSA)"
eksctl create iamserviceaccount \
  --cluster ${CLUSTER_NAME} \
  --region ${REGION} \
  --namespace ${NAMESPACE} \
  --name ${SERVICE_ACCOUNT_NAME} \
  --attach-policy-arn ${POLICY_ARN} \
  --override-existing-serviceaccounts \
  --approve

echo "👉 Installing AWS Load Balancer Controller via Helm"
helm repo add eks https://aws.github.io/eks-charts || true
helm repo update

helm upgrade --install aws-load-balancer-controller eks/aws-load-balancer-controller \
  --namespace ${NAMESPACE} \
  --set clusterName=${CLUSTER_NAME} \
  --set serviceAccount.create=false \
  --set serviceAccount.name=${SERVICE_ACCOUNT_NAME} \
  --set region=${REGION} \
  --set v=2

echo "👉 Waiting for controller pod to be ready"
kubectl rollout status deployment/aws-load-balancer-controller -n ${NAMESPACE}

echo "✅ AWS Load Balancer Controller installed successfully"
