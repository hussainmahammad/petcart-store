# 🐾 PetCart Store – Production-Grade DevOps Deployment

## 📌 Project Overview

PetCart Store is a frontend e-commerce application deployed using **three different production-grade infrastructure strategies on AWS**:

1. **EC2 + Auto Scaling + ALB** (Traditional Infrastructure)
2. **EKS with EC2 Worker Nodes** (Managed Kubernetes)
3. **EKS with Fargate** (Serverless Kubernetes)

This project demonstrates real-world DevOps practices including:

- Jenkins CI/CD automation
- Infrastructure as Code (Terraform)
- Immutable Infrastructure (Packer + Ansible)
- Containerization (Docker + ECR)
- Kubernetes (EKS)
- AWS Load Balancer Controller
- Auto Scaling policies
- CloudWatch Logs & Metrics
- Full lifecycle automation (Deploy + Destroy)

---

# 🏗 Architecture Overview

---

# 1️⃣ EC2 Deployment – Traditional + Immutable Infrastructure

## 🔹 Architecture Flow

Frontend  
→ Golden AMI (Packer + Ansible)  
→ Launch Template  
→ Auto Scaling Group  
→ Application Load Balancer  
→ Public Internet  
→ CloudWatch Logs & Metrics  

---

## 📸 Architecture Diagram

<img width="1919" height="802" alt="image" src="https://github.com/user-attachments/assets/8ddd31fd-6f8b-4f8a-a7af-cad7c7c7ae59" />
