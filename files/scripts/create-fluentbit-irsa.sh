#!/bin/bash
set -e

CLUSTER_NAME=$1
REGION=$2
ACCOUNT_ID=$3

ROLE_NAME=PetcartFluentBitRole
POLICY_NAME=PetcartFluentBitPolicy

echo "Creating IAM policy if not exists..."

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

aws iam create-policy \
  --policy-name $POLICY_NAME \
  --policy-document file:///tmp/fluent-bit-policy.json \
  >/dev/null 2>&1 || echo "Policy already exists"

echo "Creating IAM Role via eksctl..."

eksctl create iamserviceaccount \
  --cluster $CLUSTER_NAME \
  --region $REGION \
  --namespace aws-observability \
  --name fluent-bit \
  --role-name $ROLE_NAME \
  --attach-policy-arn arn:aws:iam::$ACCOUNT_ID:policy/$POLICY_NAME \
  --approve \
  --override-existing-serviceaccounts
