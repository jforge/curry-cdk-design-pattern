"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const iam = require("@aws-cdk/aws-iam");
const aws_iam_1 = require("@aws-cdk/aws-iam");
class IamStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const iamGroup = new iam.Group(this, 'IamGroup', {
            groupName: 'iam-group-billing',
            managedPolicies: [
                aws_iam_1.ManagedPolicy.fromAwsManagedPolicyName('job-function/Billing'),
                aws_iam_1.ManagedPolicy.fromAwsManagedPolicyName('ReadOnlyAccess'),
            ]
        });
        const iamUser = new iam.User(this, 'IamUser', {
            userName: 'iam-user-billing',
        });
        iamGroup.addUser(iamUser);
    }
}
exports.IamStack = IamStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJpbGxpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBc0M7QUFDdEMsd0NBQXlDO0FBQ3pDLDhDQUFpRDtBQUVqRCxNQUFhLFFBQVMsU0FBUSxHQUFHLENBQUMsS0FBSztJQUNyQyxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQy9DLFNBQVMsRUFBRSxtQkFBbUI7WUFDOUIsZUFBZSxFQUFFO2dCQUNmLHVCQUFhLENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLENBQUM7Z0JBQzlELHVCQUFhLENBQUMsd0JBQXdCLENBQUMsZ0JBQWdCLENBQUM7YUFDekQ7U0FDRixDQUFDLENBQUM7UUFFSCxNQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRTtZQUM1QyxRQUFRLEVBQUUsa0JBQWtCO1NBQzdCLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBbEJELDRCQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjZGsgPSByZXF1aXJlKCdAYXdzLWNkay9jb3JlJyk7XG5pbXBvcnQgaWFtID0gcmVxdWlyZSgnQGF3cy1jZGsvYXdzLWlhbScpO1xuaW1wb3J0IHsgTWFuYWdlZFBvbGljeSB9IGZyb20gJ0Bhd3MtY2RrL2F3cy1pYW0nO1xuXG5leHBvcnQgY2xhc3MgSWFtU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgaWFtR3JvdXAgPSBuZXcgaWFtLkdyb3VwKHRoaXMsICdJYW1Hcm91cCcsIHtcbiAgICAgIGdyb3VwTmFtZTogJ2lhbS1ncm91cC1iaWxsaW5nJyxcbiAgICAgIG1hbmFnZWRQb2xpY2llczogW1xuICAgICAgICBNYW5hZ2VkUG9saWN5LmZyb21Bd3NNYW5hZ2VkUG9saWN5TmFtZSgnam9iLWZ1bmN0aW9uL0JpbGxpbmcnKSxcbiAgICAgICAgTWFuYWdlZFBvbGljeS5mcm9tQXdzTWFuYWdlZFBvbGljeU5hbWUoJ1JlYWRPbmx5QWNjZXNzJyksXG4gICAgICBdXG4gICAgfSk7XG5cbiAgICBjb25zdCBpYW1Vc2VyID0gbmV3IGlhbS5Vc2VyKHRoaXMsICdJYW1Vc2VyJywge1xuICAgICAgdXNlck5hbWU6ICdpYW0tdXNlci1iaWxsaW5nJyxcbiAgICB9KTtcblxuICAgIGlhbUdyb3VwLmFkZFVzZXIoaWFtVXNlcik7XG4gIH1cbn1cbiJdfQ==