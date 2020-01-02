#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { IamStack } from '../lib/iam';
import { VpcStack } from '../lib/vpc';

const app = new cdk.App();
new IamStack(app,'IamStack');
new VpcStack(app,'VpcStack');
