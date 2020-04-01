#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AdminStack } from '../lib/admin';
import { IamStack } from '../lib/billing';
import { VpcStack } from '../lib/vpc';
import { Cloud9Stack } from '../lib/cloud9';

const app = new cdk.App();

new AdminStack(app, 'AdminStack');

new IamStack(app, 'IamStack');

const iVpc = {
    maxAzs: 2
  }
new VpcStack(app, 'VpcStack', iVpc);

new Cloud9Stack(app, 'Cloud9Stack',{
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  }
});
