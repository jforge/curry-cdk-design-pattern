import cdk = require('@aws-cdk/core');
import iam = require('@aws-cdk/aws-iam');
import { ManagedPolicy } from '@aws-cdk/aws-iam';

export class IamStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const iamGroup = new iam.Group(this, 'IamGroup', {
      groupName: 'iam-group-billing',
      managedPolicies: [
        ManagedPolicy.fromAwsManagedPolicyName('job-function/Billing'),
        ManagedPolicy.fromAwsManagedPolicyName('ReadOnlyAccess'),
      ]
    });

    const iamUser = new iam.User(this, 'IamUser', {
      userName: 'iam-user-billing',
    });

    iamGroup.addUser(iamUser);
  }
}
