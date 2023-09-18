terraform {
  cloud {
    organization = "andrewgarner"

    workspaces {
      name = "andrewgarner-com"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  required_version = ">= 1.1.0"
}

provider "aws" {
  region = "eu-west-2"
}
