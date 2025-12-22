resource "aws_security_group" "petcart_sg" {
  name = "petcart-sg"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

/* ================= IAM FOR CLOUDWATCH ================= */

resource "aws_iam_role" "petcart_ec2_role" {
  name = "petcart-ec2-cloudwatch-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = {
        Service = "ec2.amazonaws.com"
      }
      Action = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "cloudwatch_agent" {
  role       = aws_iam_role.petcart_ec2_role.name
  policy_arn = "arn:aws:iam::aws:policy/CloudWatchAgentServerPolicy"
}

resource "aws_iam_instance_profile" "petcart_profile" {
  name = "petcart-ec2-profile"
  role = aws_iam_role.petcart_ec2_role.name
}

/* ================= CLOUDWATCH LOG GROUPS ================= */

resource "aws_cloudwatch_log_group" "nginx_access" {
  name              = "/petcart/nginx/access"
  retention_in_days = 7
}

resource "aws_cloudwatch_log_group" "nginx_error" {
  name              = "/petcart/nginx/error"
  retention_in_days = 7
}

/* ================= EC2 ================= */

resource "aws_instance" "petcart" {
  ami                    = "ami-068c0051b15cdb816"
  instance_type          = "t3.micro"
  key_name               = "hussaincloud"
  vpc_security_group_ids = [aws_security_group.petcart_sg.id]
  iam_instance_profile   = aws_iam_instance_profile.petcart_profile.name

  tags = {
    Name = "petcart-shop"
  }
}
