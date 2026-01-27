output "public_ip" {
  value = aws_instance.petcart.public_ip
}

output "instance_id" {
  value = aws_instance.petcart.id
}

output "nginx_access_log_group" {
  value = "/petcart/nginx/access"
}

output "nginx_error_log_group" {
  value = "/petcart/nginx/error"
}
