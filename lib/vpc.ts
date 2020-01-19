import cdk = require('@aws-cdk/core');
import { Vpc , SubnetType } from '@aws-cdk/aws-ec2'

export interface VpcProps extends cdk.StackProps {
    maxAzs: number;
}

export class VpcStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: VpcProps) {

    if (props.maxAzs !== undefined && props.maxAzs <= 1) {
      throw new Error('maxAzs must be at least 2.');
    }
    super(scope, id, props);

    new Vpc(this, 'VpcStandard', {
      cidr: "172.16.0.0/16",
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'public',
          subnetType: SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: 'private',
          subnetType: SubnetType.PRIVATE,
        },
     ],
    });
  }
}
