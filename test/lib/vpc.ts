import cdk = require('@aws-cdk/core');
import { Vpc } from '@aws-cdk/aws-ec2'

export class VpcStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new Vpc(this, 'TheVPC', {
      cidr: "10.0.0.0/16"
    });
  }
}