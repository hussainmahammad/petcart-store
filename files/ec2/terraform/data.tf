# ----------------------------
# Discover default VPC
# ----------------------------
data "aws_vpc" "default" {
  default = true
}

# ----------------------------
# Discover public subnets
# ----------------------------
data "aws_subnets" "public" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}

# ----------------------------
# Fetch subnet details
# ----------------------------
data "aws_subnet" "public" {
  for_each = toset(data.aws_subnets.public.ids)
  id       = each.value
}
