import { SynthUtils , expect as cdkExpect, haveResource } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import Iam = require('../lib/billing');
import '@aws-cdk/assert/jest';

test('Fine-Grained Assertions', () => {
    const app = new cdk.App();
    const stack = new Iam.IamStack(app, 'IamStack');
    cdkExpect(stack).to(haveResource('AWS::IAM::Group', {
      GroupName: "iam-group-billing",
    }));
    cdkExpect(stack).to(haveResource('AWS::IAM::User', {
      UserName: "iam-user-billing",
    }));
  });

test('Snapshot Tests', () => {
  const app = new cdk.App();
  const stack = new Iam.IamStack(app, 'IamStack');
  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
