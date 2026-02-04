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
      name                = "amzn2-ami-hvm-*-x86_64-gp2"
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

  # -------------------------------------------------
  # Ensure SSH + SFTP are available for Ansible
  # -------------------------------------------------
  provisioner "shell" {
    inline = [
      "sudo yum update -y",
      "sudo yum install -y openssh-server openssh-clients",
      "sudo systemctl enable sshd",
      "sudo systemctl start sshd"
    ]
  }

  # -------------------------------------------------
  # Copy frontend build into the temp EC2
  # -------------------------------------------------
  provisioner "file" {
    source      = "../../../app/dist"
    destination = "/tmp/dist"
  }

  # -------------------------------------------------
  # Run Ansible to configure nginx + app
  # -------------------------------------------------
  provisioner "ansible" {
    playbook_file = "../ansible/deploy.yml"

    extra_arguments = [
      "--extra-vars",
      "frontend_src=/tmp/dist"
    ]
  }
}
