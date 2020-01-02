import cdk = require('@aws-cdk/core');
import Iam = require('../lib/iam');
import '@aws-cdk/assert/jest';

test('IamStack Tests', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Iam.IamStack(app, 'IamStack');
    // THEN
    expect(stack).toHaveResource('AWS::IAM::Group', {
      GroupName: "iam-group-billing",
    });
    expect(stack).toHaveResource('AWS::IAM::User', {
      UserName: "iam-user-billing",
    });
});
