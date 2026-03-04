# 1️⃣ EC2 Deployment – Traditional + Immutable Infrastructure

## Architecture Flow

Frontend  
→ Golden AMI (Packer + Ansible)  
→ Launch Template  
→ Auto Scaling Group  
→ Application Load Balancer  
→ Public Internet  
→ CloudWatch Logs & Metrics  

---

##  Architecture Diagram
[ Add EC2 Architecture Diagram Screenshot Here ]

---

##  Detailed Deployment Flow

### Step 1 – Frontend Build (CI Stage)

- Jenkins builds the frontend using Vite.
- Static files are generated in `/app/dist`.

---

### Step 2 – Golden AMI Creation (Immutable Strategy)

Instead of configuring instances at runtime, a **Golden AMI** is created.

**Packer**
- Base Image: Amazon Linux 2
- Launches temporary EC2
- Copies frontend build
- Runs Ansible provisioner

**Ansible**
- Installs Nginx
- Configures SPA routing
- Installs CloudWatch Agent
- Configures log forwarding
- Enables Nginx service

Result:
> Fully pre-configured immutable AMI ready for scaling.

This ensures:
- Faster scaling
- No manual configuration
- Consistent environments
- Production-style immutable infra

---

## Packer Build Logs
[ Add Packer Build Screenshot Here ]

---

### Step 3 – Infrastructure Provisioning (Terraform)

Terraform provisions:

- Security Groups
- Application Load Balancer
- Target Group
- Launch Template (Golden AMI)
- Auto Scaling Group
- CPU-based scaling policies
- CloudWatch alarms
- Remote backend (S3 + DynamoDB lock)

Infrastructure state is stored securely in S3.

---

## 📸 Terraform Apply Output
[ Add Terraform Apply Screenshot Here ]

---

### 🔹 Auto Scaling Configuration

- Min: 1
- Desired: 1
- Max: 2
- CPU > 70% → Scale Out
- CPU < 30% → Scale In

CloudWatch alarms trigger scaling policies automatically.

---

## 📸 CloudWatch Scaling Alarm
[ Add CloudWatch Alarm Screenshot Here ]

---

### 🔹 Observability (EC2)

- `/var/log/nginx/access.log` → CloudWatch
- `/var/log/nginx/error.log` → CloudWatch
- CPU metrics collected every 60 seconds

---

## 📸 EC2 CloudWatch Logs
[ Add EC2 Logs Screenshot Here ]

---
