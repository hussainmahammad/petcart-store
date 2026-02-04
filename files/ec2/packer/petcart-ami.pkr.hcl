packer {
  required_plugins {
    amazon = {
      source  = "github.com/hashicorp/amazon"
      version = ">= 1.0.0"
    }
    ansible = {
      source  = "github.com/hashicorp/ansible"
      version = ">= 1.0.0"
    }
  }
}

variable "region" {
  type    = string
  default = "us-east-1"
}

variable "ami_name" {
  type    = string
  default = "petcart-frontend-ami"
}

source "amazon-ebs" "petcart" {
  region        = var.region
  instance_type = "t3.micro"
  ssh_username  = "ec2-user"
  ami_name      = "${var.ami_name}-{{timestamp}}"

  source_ami_filter {
    filters = {
      name                = "al2023-ami-*-x86_64"
      virtualization-type = "hvm"
      root-device-type    = "ebs"
    }
    owners      = ["amazon"]
    most_recent = true
  }
}

build {
  name    = "petcart-golden-ami"
  sources = ["source.amazon-ebs.petcart"]

  # Copy frontend build
  provisioner "file" {
    source      = "../../../app/dist"
    destination = "/tmp/dist"
  }

  # Run Ansible (WILL WORK on AL2023)
  provisioner "ansible" {
    playbook_file = "../ansible/deploy.yml"

    extra_arguments = [
      "--extra-vars",
      "frontend_src=/tmp/dist"
    ]
  }
}
