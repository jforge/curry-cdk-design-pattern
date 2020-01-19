"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const iam = require("@aws-cdk/aws-iam");
const aws_iam_1 = require("@aws-cdk/aws-iam");
class AdminStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const iamGroup = new iam.Group(this, 'IamGroup', {
            groupName: 'iam-group-billing',
            managedPolicies: [
                aws_iam_1.ManagedPolicy.fromAwsManagedPolicyName('job-function/Billing'),
                aws_iam_1.ManagedPolicy.fromAwsManagedPolicyName('ReadOnlyAccess'),
            ]
        });
        const iamUserCli = new iam.User(this, 'IamUserCli', {
            userName: 'iam-admin-cli'
        });
        const iamUserConsole = new iam.User(this, 'IamUserConsole', {
            userName: 'iam-admin-console'
        });
        iamGroup.addUser(iamUserCli);
        iamGroup.addUser(iamUserConsole);
        const dependsIamGroup = new cdk.ConcreteDependable();
        dependsIamGroup.add(iamGroup);
        iamUserCli.node.addDependency(dependsIamGroup);
        iamUserConsole.node.addDependency(dependsIamGroup);
    }
}
exports.AdminStack = AdminStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZG1pbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFzQztBQUN0Qyx3Q0FBeUM7QUFDekMsOENBQWlEO0FBRWpELE1BQWEsVUFBVyxTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ3ZDLFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDbEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDL0MsU0FBUyxFQUFFLG1CQUFtQjtZQUM5QixlQUFlLEVBQUU7Z0JBQ2YsdUJBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDOUQsdUJBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQzthQUN6RDtTQUNGLENBQUMsQ0FBQztRQUVILE1BQU0sVUFBVSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ2xELFFBQVEsRUFBRSxlQUFlO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sY0FBYyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDMUQsUUFBUSxFQUFFLG1CQUFtQjtTQUM5QixDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLFFBQVEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFakMsTUFBTSxlQUFlLEdBQUcsSUFBSSxHQUFHLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNyRCxlQUFlLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9DLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRjtBQTNCRCxnQ0EyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2RrID0gcmVxdWlyZSgnQGF3cy1jZGsvY29yZScpO1xuaW1wb3J0IGlhbSA9IHJlcXVpcmUoJ0Bhd3MtY2RrL2F3cy1pYW0nKTtcbmltcG9ydCB7IE1hbmFnZWRQb2xpY3kgfSBmcm9tICdAYXdzLWNkay9hd3MtaWFtJztcblxuZXhwb3J0IGNsYXNzIEFkbWluU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgaWFtR3JvdXAgPSBuZXcgaWFtLkdyb3VwKHRoaXMsICdJYW1Hcm91cCcsIHtcbiAgICAgIGdyb3VwTmFtZTogJ2lhbS1ncm91cC1iaWxsaW5nJyxcbiAgICAgIG1hbmFnZWRQb2xpY2llczogW1xuICAgICAgICBNYW5hZ2VkUG9saWN5LmZyb21Bd3NNYW5hZ2VkUG9saWN5TmFtZSgnam9iLWZ1bmN0aW9uL0JpbGxpbmcnKSxcbiAgICAgICAgTWFuYWdlZFBvbGljeS5mcm9tQXdzTWFuYWdlZFBvbGljeU5hbWUoJ1JlYWRPbmx5QWNjZXNzJyksXG4gICAgICBdXG4gICAgfSk7XG5cbiAgICBjb25zdCBpYW1Vc2VyQ2xpID0gbmV3IGlhbS5Vc2VyKHRoaXMsICdJYW1Vc2VyQ2xpJywge1xuICAgICAgdXNlck5hbWU6ICdpYW0tYWRtaW4tY2xpJ1xuICAgIH0pO1xuICAgIGNvbnN0IGlhbVVzZXJDb25zb2xlID0gbmV3IGlhbS5Vc2VyKHRoaXMsICdJYW1Vc2VyQ29uc29sZScsIHtcbiAgICAgIHVzZXJOYW1lOiAnaWFtLWFkbWluLWNvbnNvbGUnXG4gICAgfSk7XG5cbiAgICBpYW1Hcm91cC5hZGRVc2VyKGlhbVVzZXJDbGkpO1xuICAgIGlhbUdyb3VwLmFkZFVzZXIoaWFtVXNlckNvbnNvbGUpO1xuXG4gICAgY29uc3QgZGVwZW5kc0lhbUdyb3VwID0gbmV3IGNkay5Db25jcmV0ZURlcGVuZGFibGUoKTtcbiAgICBkZXBlbmRzSWFtR3JvdXAuYWRkKGlhbUdyb3VwKTtcbiAgICBpYW1Vc2VyQ2xpLm5vZGUuYWRkRGVwZW5kZW5jeShkZXBlbmRzSWFtR3JvdXApO1xuICAgIGlhbVVzZXJDb25zb2xlLm5vZGUuYWRkRGVwZW5kZW5jeShkZXBlbmRzSWFtR3JvdXApO1xuICB9XG59XG4iXX0=