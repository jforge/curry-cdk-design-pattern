import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';
import * as cloud9 from '@aws-cdk/aws-cloud9';

export class Cloud9Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'VPC', { maxAzs: 3});
    new cloud9.Ec2Environment(this, 'Cloud9Env', { vpc });
    const defaultVpc = ec2.Vpc.fromLookup(this, 'DefaultVPC', { isDefault: true });
    
  }
}
