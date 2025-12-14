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

resource "aws_instance" "petcart" {
  ami                    = "ami-068c0051b15cdb816" # Amazon Linux 2023 us-east-1
  instance_type          = "t3.micro"
  key_name               = "hussaincloud"
  vpc_security_group_ids = [aws_security_group.petcart_sg.id]

  tags = {
    Name = "petcart-shop"
  }
}
