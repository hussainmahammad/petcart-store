#!/bin/bash
set -e

# ────────────────────────────────────────────────
# CONFIG - change only if needed
# ────────────────────────────────────────────────
CLUSTER_NAME="petcart-eks"
REGION="us-east-1"
NAMESPACE="fargate-container-insights"
SERVICE_ACCOUNT_NAME="adot-collector"
ROLE_NAME="EKS-${CLUSTER_NAME}-ADOT-Metrics-Role"

# ────────────────────────────────────────────────
echo "=== Setting up ADOT for Container Insights Metrics ==="

# Step 1: Associate OIDC provider (idempotent)
echo "Associating IAM OIDC provider (if not already done)..."
eksctl utils associate-iam-oidc-provider \
  --cluster "${CLUSTER_NAME}" \
  --region "${REGION}" \
  --approve || true

# Step 2: Create IAM Service Account + attach CloudWatch policy
echo "Creating IAM Service Account for ADOT collector..."
eksctl create iamserviceaccount \
  --name "${SERVICE_ACCOUNT_NAME}" \
  --namespace "${NAMESPACE}" \
  --cluster "${CLUSTER_NAME}" \
  --region "${REGION}" \
  --role-name "${ROLE_NAME}" \
  --attach-policy-arn "arn:aws:iam::aws:policy/CloudWatchAgentServerPolicy" \
  --approve \
  --override-existing-serviceaccounts || true

echo ""
echo "──────────────────────────────────────────────────────────────"
echo "ADOT IAM setup completed:"
echo "  • Namespace:          ${NAMESPACE}"
echo "  • ServiceAccount:     ${SERVICE_ACCOUNT_NAME}"
echo "  • IAM Role:           ${ROLE_NAME}"
echo "  • Attached Policy:    CloudWatchAgentServerPolicy"
echo "──────────────────────────────────────────────────────────────"
echo ""
