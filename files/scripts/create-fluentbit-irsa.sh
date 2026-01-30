#!/bin/bash
set -e

CLUSTER_NAME="$1"
REGION="$2"
ACCOUNT_ID="$3"

ROLE_NAME="PetcartFluentBitRole"
POLICY_NAME="PetcartFluentBitPolicy"
NAMESPACE="aws-observability"
SERVICE_ACCOUNT="fluent-bit"

echo "--------------------------------------------------"
echo "Creating / Ensuring IAM policy for Fluent Bit"
echo "--------------------------------------------------"

cat > /tmp/fluent-bit-policy.json <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:DescribeLogGroups",
        "logs:DescribeLogStreams",
        "logs:PutLogEvents"
      ],
      "Resource": "*"
    }
  ]
}
EOF

POLICY_ARN="arn:aws:iam::$ACCOUNT_ID:policy/$POLICY_NAME"

aws iam get-policy --policy-arn "$POLICY_ARN" >/dev/null 2>&1 || \
aws iam create-policy \
  --policy-name "$POLICY_NAME" \
  --policy-document file:///tmp/fluent-bit-policy.json \
  >/dev/null

echo "--------------------------------------------------"
echo "Creating / Updating IRSA service account"
echo "--------------------------------------------------"

eksctl create iamserviceaccount \
  --cluster "$CLUSTER_NAME" \
  --region "$REGION" \
  --namespace "$NAMESPACE" \
  --name "$SERVICE_ACCOUNT" \
  --role-name "$ROLE_NAME" \
  --attach-policy-arn "$POLICY_ARN" \
  --approve \
  --override-existing-serviceaccounts

echo "--------------------------------------------------"
echo "Fluent Bit IRSA READY"
echo "--------------------------------------------------"
