## 📸 EKS Fargate Architecture Diagram

![EKS Fargate Architecture](ADD_EKS_FARGATE_ARCHITECTURE_SCREENSHOT_HERE)

---

## 🔹 Fargate Profiles

Fargate Profiles determine **which Kubernetes pods should run on Fargate compute**.

Profiles are configured for the following namespaces:

- `default`
- `kube-system`
- `petcart`

When pods are created in these namespaces, they are automatically scheduled to run on **AWS Fargate compute** instead of EC2 nodes.

This removes the need for:

- Node patching  
- Capacity planning  
- OS management  

Pods start automatically whenever the Kubernetes deployment creates them.

---

## 🔹 Application Deployment

The PetCart application is deployed inside the Kubernetes cluster using **standard Kubernetes resources**.

### Components Used

### Namespace

A dedicated namespace is used to isolate application resources.

```yaml
namespace: petcart
```

**Benefits**

- Logical separation  
- Cleaner resource management  
- Easier monitoring  

---

### Deployment

The **Deployment** manages the application pods running on Fargate.

**Responsibilities**

- Maintains the desired number of pods  
- Handles rolling updates  
- Ensures application availability  

The container image used by the deployment is stored in **Amazon ECR**.

---

### Service

A Kubernetes **Service** exposes the application internally inside the cluster.

**Configuration**

```
Type: ClusterIP
```

**Purpose**

- Enables communication between Kubernetes components  
- Provides internal load balancing between pods  

---

### Ingress (AWS Load Balancer Controller)

The application is exposed externally using **Kubernetes Ingress integrated with the AWS Load Balancer Controller**.

When the Ingress resource is created, the controller automatically provisions:

- Application Load Balancer (ALB)  
- Target Groups  
- Listener Rules  
- Security Groups  

**Traffic Flow**

```
Internet
   ↓
Application Load Balancer
   ↓
Ingress
   ↓
Service
   ↓
Pods running on Fargate
```

---

## 📸 ALB Created by Ingress

![ALB Created by Ingress](ADD_ALB_SCREENSHOT_HERE)

---

## 🔹 Logging (Fargate)

Application logs are centralized using **Amazon CloudWatch Logs**.

Logging is configured using the **aws-observability namespace** and **Fargate logging configuration**.

This enables collection of:

- Container logs  
- Pod logs  
- Application logs  

All logs are stored in **CloudWatch Log Groups** for monitoring and troubleshooting.

---

## 📸 Fargate Logs Screenshot

![Fargate Logs](ADD_FARGATE_LOGS_SCREENSHOT_HERE)
