import { SynthUtils } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import Iam = require('../lib/iam');
import '@aws-cdk/assert/jest';

test('Fine-Grained Assertions', () => {
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

test('Snapshot Tests', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new Iam.IamStack(app, 'IamStack');
  // THEN
  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
