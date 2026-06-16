# Multi-Stage Docker Build Pipeline for Kubernetes Deployment

## Overview

This project demonstrates the deployment of a containerized Node.js Blog API on Kubernetes using Docker multi-stage builds, MongoDB, GitHub Actions CI/CD, ConfigMaps, Secrets, Health Checks, and Horizontal Pod Autoscaling (HPA).

The goal of this project is to showcase modern DevOps practices, including containerization, Kubernetes orchestration, automated image builds, and rolling deployments.

---

## Architecture

<img width="933" height="341" alt="image" src="https://github.com/user-attachments/assets/9cd7f698-03d3-432d-a28c-6596cb32a975" />


## Features

* Multi-stage Docker build
* Containerized Node.js application
* MongoDB deployment on Kubernetes
* Kubernetes Namespace isolation
* ConfigMap-based configuration management
* Secret-based sensitive data management
* Liveness and Readiness Probes
* Horizontal Pod Autoscaler (HPA)
* GitHub Actions CI/CD pipeline
* Docker Hub image publishing
* Rolling deployment updates

---

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### DevOps

* Docker
* Kubernetes (Kind)
* GitHub Actions
* Docker Hub

## CI/CD Pipeline

The CI/CD pipeline is implemented using GitHub Actions.

### Workflow

1. Developer pushes code to GitHub
2. GitHub Actions workflow starts
3. Docker image is built
4. Image is pushed to Docker Hub
5. Kubernetes deployment is updated


## Scaling

The Horizontal Pod Autoscaler automatically adjusts the number of application pods based on CPU utilization.

```bash
kubectl get hpa -n blog-app
```

---

## Future Improvements

* Prometheus Monitoring
* Grafana Dashboards
* Ingress Controller
* Helm Charts
* ArgoCD GitOps Deployment
* AWS EKS Deployment
* Persistent Volumes for MongoDB
* Auto rolling Updates
---

GitHub: https://github.com/spandan18-dev
