#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AdminStack } from '../lib/admin';
import { IamStack } from '../lib/billing';
import { VpcStack } from '../lib/vpc';
import { Cloud9Stack } from '../lib/cloud9';
import { Ec2Stack } from '../lib/ec2';

/* app */
const app = new cdk.App();

/* Stacks */
new AdminStack(app, 'AdminStack');
new IamStack(app, 'IamStack');
new VpcStack(app, 'VpcStack', {
  maxAzs: 2
});
new Cloud9Stack(app, 'Cloud9Stack',{
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  }
});
new Ec2Stack(app, 'Ec2Stack');
