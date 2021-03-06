import { SynthUtils , expect as cdkExpect, haveResource, countResources } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import Vpc = require('../lib/vpc');
import '@aws-cdk/assert/jest';

const iVpc = {
  maxAzs: 2
}

test('Fine-Grained Assertions', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Vpc.VpcStack(app, 'VpcStack', iVpc);
    // THEN
    cdkExpect(stack).to(haveResource('AWS::EC2::VPC', {
      EnableDnsHostnames: true,
      EnableDnsSupport: true,
      InstanceTenancy: "default",
    }));
});

test('Snapshot Tests', () => {
  const app = new cdk.App();
  const stack = new Vpc.VpcStack(app, 'VpcStack', iVpc);
  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});

test('Validation Tests - maxAzs = 0 is Error', () => {
  const app = new cdk.App();
  expect(() => {
    new Vpc.VpcStack(app, 'VpcStack', {
      maxAzs: 0
    });
  }).toThrowError('maxAzs must be at least 2.');
});

test('Validation Tests - maxAzs = 1 is Error', () => {
  const app = new cdk.App();
  expect(() => {
    new Vpc.VpcStack(app, 'VpcStack', {
      maxAzs: 1
    });
  }).toThrowError('maxAzs must be at least 2.');
});

test('countResources', () => {
  const app = new cdk.App();
  const stack = new Vpc.VpcStack(app, 'VpcStack', iVpc);
  cdkExpect(stack).to(countResources('AWS::EC2::Subnet', 4));
});
