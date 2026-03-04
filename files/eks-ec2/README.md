# 2️⃣ EKS (EC2 Mode) – Kubernetes with Managed Nodes

## 🔹 Architecture Flow

Jenkins Pipeline  
↓  
Docker Build  
↓  
Push Image to Amazon ECR  
↓  
Kubernetes Deployment  
↓  
EKS Cluster (Managed Node Group - EC2)  
↓  
Service (ClusterIP)  
↓  
Ingress (AWS Load Balancer Controller)  
↓  
Application Load Balancer (ALB)  
↓  
Public Internet  

This deployment uses **Amazon EKS with EC2 worker nodes** to run the PetCart frontend application inside Kubernetes.

The **AWS Load Balancer Controller** dynamically provisions an **Application Load Balancer (ALB)** to expose the application publicly.

---

## 📸 EKS EC2 Architecture Diagram

![EKS EC2 Architecture](screenshots/eks-ec2-architecture.png)

---

## 🔹 Cluster Creation

The Kubernetes cluster is created using **eksctl**.

Cluster configuration includes:

- Managed Node Group
- Instance type: **t3.small**
- Worker nodes: **2**
- OIDC provider enabled
- IAM Roles for Service Accounts (IRSA)

Benefits of this setup:

- AWS manages the **Kubernetes control plane**
- Worker nodes are managed using **EKS Managed Node Groups**
- Secure IAM integration for Kubernetes services
- Production-style Kubernetes environment

---

## 🔹 Docker & ECR Integration

The Jenkins CI pipeline performs the following steps:

1. Build Docker image using a **multi-stage Dockerfile**
2. Authenticate with **Amazon ECR**
3. Push container image to ECR
4. Tag image as **latest**

Deployment then pulls the image directly from **Amazon ECR**.

Pipeline flow:

Jenkins  
↓  
Docker Build  
↓  
Amazon ECR  
↓  
Kubernetes Deployment  

---

## 📸 ECR Repository Screenshot

![ECR Repository](screenshots/ecr-repository.png)

---

## 🔹 Kubernetes Components

### Namespace

A dedicated namespace is used to isolate application resources.

`namespace: petcart`

Benefits:

- Logical separation
- Resource organization
- Easier monitoring

---

### Deployment

Defines the application pods running inside the cluster.

Configuration:

- Replica count: **1**
- Container port: **80**
- Image pulled from **Amazon ECR**

Responsibilities:

- Ensures desired number of pods
- Handles rolling updates
- Maintains application availability

---

### Service

The Kubernetes **Service** exposes pods internally within the cluster.

Configuration:

`Type: ClusterIP`

Purpose:

- Enables communication between pods
- Internal load balancing within the cluster

---

### Ingress (AWS Load Balancer Controller)

Ingress exposes the application externally using AWS infrastructure.

Configuration:

- Ingress Class: **alb**
- Scheme: **internet-facing**
- Target Type: **ip**

When the Ingress resource is applied, the **AWS Load Balancer Controller automatically creates:**

- Application Load Balancer
- Target Groups
- Listener Rules
- Security Groups

No manual ALB provisioning is required.

---

## 📸 ALB Created by Ingress

![EKS ALB](screenshots/eks-alb.png)

---

## 🔹 Observability (EKS EC2)

Monitoring is enabled using **Amazon CloudWatch Container Insights**.

Features enabled:

- Pod CPU & memory metrics
- Node metrics
- Cluster performance insights
- Centralized log collection

This provides visibility into:

- Pod health
- Node utilization
- Application performance

---

## 📸 Container Insights Metrics

![Container Insights](screenshots/container-insights.png)

---
