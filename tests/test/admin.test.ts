import { SynthUtils } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import { AdminStack } from '../lib/admin';
import '@aws-cdk/assert/jest';

test('Snapshot Tests', () => {
  const app = new cdk.App();
  const stack = new AdminStack(app, 'AdminStack');
  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
