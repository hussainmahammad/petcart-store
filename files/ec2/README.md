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

<img width="1536" height="853" alt="Ec2_Architecture" src="https://github.com/user-attachments/assets/e39480c2-926e-423a-a32a-d0ce251479be" />

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

<img width="1166" height="792" alt="image" src="https://github.com/user-attachments/assets/dfb90a52-936d-484d-adb1-f2caf37a13e7" />

<img width="1166" height="134" alt="image" src="https://github.com/user-attachments/assets/c2830c46-711d-45d1-9f5f-0c8d350062d3" />

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

## Terraform Apply Output

<img width="1166" height="607" alt="image" src="https://github.com/user-attachments/assets/77b71573-3887-4781-87ba-ad17b0f736cb" />

---

###  Auto Scaling Configuration

- Min: 1
- Desired: 1
- Max: 2
- CPU > 70% → Scale Out
- CPU < 30% → Scale In

CloudWatch alarms trigger scaling policies automatically.

---

## CloudWatch Scaling Alarm
[ Add CloudWatch Alarm Screenshot Here ]

---

### 🔹 Observability (EC2)

- `/var/log/nginx/access.log` → CloudWatch
- `/var/log/nginx/error.log` → CloudWatch
- CPU metrics collected every 60 seconds

---

## EC2 CloudWatch Logs
[ Add EC2 Logs Screenshot Here ]

---
