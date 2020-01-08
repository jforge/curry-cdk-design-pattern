import { SynthUtils } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import Vpc = require('../lib/vpc');
import '@aws-cdk/assert/jest';

test('Fine-Grained Assertions', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Vpc.VpcStack(app, 'VpcStack');
    // THEN
    expect(stack).toHaveResource('AWS::EC2::VPC', {
      EnableDnsHostnames: true,
      EnableDnsSupport: true,
      InstanceTenancy: "default",
    });
});

test('Snapshot Tests', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new Vpc.VpcStack(app, 'VpcStack');
  // THEN
  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
