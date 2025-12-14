
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "ap-south-1"
}

resource "aws_s3_bucket" "petcart_store_assets" {
  bucket = "petcart-store-assets-demo"
}

output "bucket_name" {
  value = aws_s3_bucket.petcart_store_assets.bucket
}
