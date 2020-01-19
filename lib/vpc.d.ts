import cdk = require('@aws-cdk/core');
export interface VpcProps extends cdk.StackProps {
    maxAzs: number;
}
export declare class VpcStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props: VpcProps);
}
