terraform {
  backend "s3" {
    bucket         = "hussainmahammad.online-tfstates1"
    key            = "petcart/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "petcart-terraform-locks"
    encrypt        = true
  }
}
