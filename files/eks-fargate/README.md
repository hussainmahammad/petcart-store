# PetCart Deployment on AWS EKS Fargate

## EKS Fargate Architecture Diagram

<img width="1067" height="769" alt="eks_Fargate" src="https://github.com/user-attachments/assets/fc833f0e-67dc-4393-a1fb-8a45ba0815b9" />

---

##  How This Deployment Works

This project deploys the **PetCart application on AWS EKS using AWS Fargate**.

Instead of managing **EC2 worker nodes**, the application pods run on **AWS Fargate**, which is a **serverless compute engine for containers**.

AWS automatically manages the infrastructure while **Kubernetes manages the containers**.

---

##  CI/CD Pipeline Flow

The application container image is built and pushed to **Amazon ECR** using **Jenkins**.

```
Jenkins Pipeline
      ↓
Docker Build
      ↓
Docker Tag
      ↓
Docker Push
      ↓
Amazon ECR (petcart repository)
```

Jenkins builds the Docker image and stores it in **Amazon ECR**, which is used by Kubernetes to pull the application image.

---

##  EKS Cluster Setup

The Kubernetes cluster is created using **eksctl**.

```bash
eksctl create cluster
```

This command creates the **EKS cluster and Fargate profiles**.

The **EKS Control Plane is fully managed by AWS**, which includes:

- Kubernetes API Server  
- etcd  
- Scheduler  
- Controller Manager  

These components manage the Kubernetes cluster and schedule pods.

---

##  Fargate Profiles

Fargate Profiles define **which pods should run on AWS Fargate**.

Profiles are configured for the following namespaces:

```
default
kube-system
petcart
```
<img width="1166" height="268" alt="image" src="https://github.com/user-attachments/assets/5c57405c-0a29-4415-9b4b-476a8d84a456" />
```

Whenever a pod is created in these namespaces, it automatically runs on **AWS Fargate compute instead of EC2 nodes**.

This removes the need for:

- Managing worker nodes  
- OS patching  
- Capacity planning  

---

## 📦 Application Deployment

The PetCart application is deployed using **standard Kubernetes resources**.

The application runs inside a dedicated namespace.

```
Namespace: petcart
```

This helps isolate application resources inside the cluster.

---

### Deployment

The **Deployment** creates and manages the application pods.

Responsibilities:

- Creates pods  
- Maintains the desired number of pods  
- Handles rolling updates  

The deployment pulls the container image from **Amazon ECR**.

---

### Pods (Running on Fargate)

When the deployment creates pods, **AWS Fargate automatically provides compute resources**.

This means:

- No EC2 instances  
- No server management  
- Pods run in serverless containers  

---

### Service (ClusterIP)

The application pods are exposed internally using a Kubernetes **Service**.

```
Type: ClusterIP
```

The service provides:

- Internal communication inside the cluster  
- Load balancing between pods  

---

## 🌐 Application Access using Ingress

The application is exposed to the internet using **Kubernetes Ingress**.

The **AWS Load Balancer Controller** automatically creates an **Application Load Balancer (ALB)**.

---

## Traffic Flow

The request path looks like this:

```
Internet
   ↓
Application Load Balancer (ALB)
   ↓
Ingress
   ↓
Service (ClusterIP)
   ↓
Pods running on Fargate
```

Pods are **not directly exposed to the internet**.  
All traffic first passes through the **Application Load Balancer**.

---

## ALB Created by Ingress

![ALB Screenshot](ADD_ALB_SCREENSHOT_HERE)

---

## 📊 Logging

Application logs from the containers are collected using **Amazon CloudWatch Logs**.

Log flow:

```
Pods (Fargate)
     ↓
CloudWatch Logs
     ↓
Amazon CloudWatch
```

This helps monitor application logs and troubleshoot issues.

---

## Fargate Logs

![Fargate Logs](ADD_FARGATE_LOGS_SCREENSHOT_HERE)
