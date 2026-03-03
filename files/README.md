# PetCart Store

This project demonstrates deployment of PetCart application using:

- EC2
- EKS (EC2 mode)
- EKS (Fargate mode)
- Jenkins CI/CD

## Deployment Options

- files/ec2 → Manual EC2 deployment
- files/eks-ec2 → Kubernetes on EC2 worker nodes
- files/eks-fargate → Serverless Kubernetes using Fargate

## CI/CD

- Jenkinsfile.deploy → Deploy pipeline
- Jenkinsfile.destroy → Destroy infrastructure
