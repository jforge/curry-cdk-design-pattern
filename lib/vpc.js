"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const aws_ec2_1 = require("@aws-cdk/aws-ec2");
class VpcStack extends cdk.Stack {
    constructor(scope, id, props) {
        if (props.maxAzs !== undefined && props.maxAzs <= 1) {
            throw new Error('maxAzs must be at least 2.');
        }
        super(scope, id, props);
        new aws_ec2_1.Vpc(this, 'VpcStandard', {
            cidr: "172.16.0.0/16",
            subnetConfiguration: [
                {
                    cidrMask: 24,
                    name: 'public',
                    subnetType: aws_ec2_1.SubnetType.PUBLIC,
                },
                {
                    cidrMask: 24,
                    name: 'private',
                    subnetType: aws_ec2_1.SubnetType.PRIVATE,
                },
            ],
        });
    }
}
exports.VpcStack = VpcStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXNDO0FBQ3RDLDhDQUFtRDtBQU1uRCxNQUFhLFFBQVMsU0FBUSxHQUFHLENBQUMsS0FBSztJQUNyQyxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWU7UUFFM0QsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNuRCxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDL0M7UUFDRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixJQUFJLGFBQUcsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQzNCLElBQUksRUFBRSxlQUFlO1lBQ3JCLG1CQUFtQixFQUFFO2dCQUNuQjtvQkFDRSxRQUFRLEVBQUUsRUFBRTtvQkFDWixJQUFJLEVBQUUsUUFBUTtvQkFDZCxVQUFVLEVBQUUsb0JBQVUsQ0FBQyxNQUFNO2lCQUM5QjtnQkFDRDtvQkFDRSxRQUFRLEVBQUUsRUFBRTtvQkFDWixJQUFJLEVBQUUsU0FBUztvQkFDZixVQUFVLEVBQUUsb0JBQVUsQ0FBQyxPQUFPO2lCQUMvQjthQUNIO1NBQ0QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBeEJELDRCQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjZGsgPSByZXF1aXJlKCdAYXdzLWNkay9jb3JlJyk7XG5pbXBvcnQgeyBWcGMgLCBTdWJuZXRUeXBlIH0gZnJvbSAnQGF3cy1jZGsvYXdzLWVjMidcblxuZXhwb3J0IGludGVyZmFjZSBWcGNQcm9wcyBleHRlbmRzIGNkay5TdGFja1Byb3BzIHtcbiAgICBtYXhBenM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFZwY1N0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBWcGNQcm9wcykge1xuXG4gICAgaWYgKHByb3BzLm1heEF6cyAhPT0gdW5kZWZpbmVkICYmIHByb3BzLm1heEF6cyA8PSAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21heEF6cyBtdXN0IGJlIGF0IGxlYXN0IDIuJyk7XG4gICAgfVxuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgbmV3IFZwYyh0aGlzLCAnVnBjU3RhbmRhcmQnLCB7XG4gICAgICBjaWRyOiBcIjE3Mi4xNi4wLjAvMTZcIixcbiAgICAgIHN1Ym5ldENvbmZpZ3VyYXRpb246IFtcbiAgICAgICAge1xuICAgICAgICAgIGNpZHJNYXNrOiAyNCxcbiAgICAgICAgICBuYW1lOiAncHVibGljJyxcbiAgICAgICAgICBzdWJuZXRUeXBlOiBTdWJuZXRUeXBlLlBVQkxJQyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNpZHJNYXNrOiAyNCxcbiAgICAgICAgICBuYW1lOiAncHJpdmF0ZScsXG4gICAgICAgICAgc3VibmV0VHlwZTogU3VibmV0VHlwZS5QUklWQVRFLFxuICAgICAgICB9LFxuICAgICBdLFxuICAgIH0pO1xuICB9XG59XG4iXX0=