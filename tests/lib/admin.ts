import cdk = require('@aws-cdk/core');
import iam = require('@aws-cdk/aws-iam');
import { ManagedPolicy } from '@aws-cdk/aws-iam';

export class AdminStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const iamGroup = new iam.Group(this, 'IamGroup', {
      groupName: 'iam-group-billing',
      managedPolicies: [
        ManagedPolicy.fromAwsManagedPolicyName('job-function/Billing'),
        ManagedPolicy.fromAwsManagedPolicyName('ReadOnlyAccess'),
      ]
    });

    const iamUserCli = new iam.User(this, 'IamUserCli', {
      userName: 'iam-admin-cli'
    });
    const iamUserConsole = new iam.User(this, 'IamUserConsole', {
      userName: 'iam-admin-console'
    });

    iamGroup.addUser(iamUserCli);
    iamGroup.addUser(iamUserConsole);

    const dependsIamGroup = new cdk.ConcreteDependable();
    dependsIamGroup.add(iamGroup);
    iamUserCli.node.addDependency(dependsIamGroup);
    iamUserConsole.node.addDependency(dependsIamGroup);
  }
}
