#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AdminStack } from '../lib/admin';
import { IamStack } from '../lib/iam';
import { VpcStack } from '../lib/vpc';

const app = new cdk.App();

new AdminStack(app, 'AdminStack');

new IamStack(app, 'IamStack');

const iVpc = {
    maxAzs: 2
  }
new VpcStack(app, 'VpcStack', iVpc);
