# EKS (EC2 Mode) – Kubernetes with Managed Nodes

## Architecture Flow

Jenkins Pipeline  
↓  
Docker Build  
→ Push to ECR  
→ EKS Cluster (Managed Node Group)  
→ AWS Load Balancer Controller  
→ Kubernetes Deployment  
→ Service (ClusterIP)  
→ Ingress (ALB)  
→ Public Internet  


This deployment uses **Amazon EKS with EC2 worker nodes** to run the PetCart frontend application inside Kubernetes.

The **AWS Load Balancer Controller** dynamically provisions an **Application Load Balancer (ALB)** to expose the application publicly.

---

## EKS EC2 Architecture Diagram

<img width="1536" height="919" alt="ChatGPT Image Mar 4, 2026, 01_05_20 PM" src="https://github.com/user-attachments/assets/3bfa74a5-dcb1-4ad3-911d-03f546d5dc1d" />

---

##  Cluster Creation

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

##  Docker & ECR Integration

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

##  ECR Repository Screenshot

<img width="1543" height="152" alt="image" src="https://github.com/user-attachments/assets/a5d95f93-cbed-49ab-87b7-2cedd1fd4d73" />

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

## Created Petcart Cluster

<img width="1166" height="546" alt="image" src="https://github.com/user-attachments/assets/9f1eb676-07d3-4c7c-b100-9172c08b9a59" />

---

<img width="1166" height="364" alt="image" src="https://github.com/user-attachments/assets/1e9abb6b-f910-404d-9f32-ea402326db71" />

---

<img width="1166" height="347" alt="image" src="https://github.com/user-attachments/assets/f211b7c5-5a4c-4e54-bab8-bf559a0b3cf7" />

---

## ALB Created by Ingress

<img width="1166" height="60" alt="image" src="https://github.com/user-attachments/assets/d83f6c78-0686-4713-ad0c-9d869cf7005b" />

---

##  Observability (EKS EC2)

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

## Container Insights Metrics

<img width="1166" height="494" alt="image" src="https://github.com/user-attachments/assets/a234827e-b52a-4642-b709-d7e05fdbcfeb" />

---

**CPU and Memory usage of the PetCart deployment pods are retrieved from CloudWatch Container Insights and displayed in the UI.**

<img width="1007" height="415" alt="image" src="https://github.com/user-attachments/assets/d278f549-25c4-4aef-8728-078336b18cf1" />

---

**Amazon CloudWatch Logs Groups**

<img width="1166" height="301" alt="image" src="https://github.com/user-attachments/assets/0a1102f5-114f-44e9-8941-8ed5c3f06bea" />

---

**Access and Error logs shown in the UI console are fetched from CloudWatch Log Groups**

<img width="1166" height="728" alt="image" src="https://github.com/user-attachments/assets/29944fbf-a882-41be-8d5d-4f79be1537e9" />

---
