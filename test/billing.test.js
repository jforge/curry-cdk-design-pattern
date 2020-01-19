"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("@aws-cdk/assert");
const cdk = require("@aws-cdk/core");
const Iam = require("../lib/billing");
require("@aws-cdk/assert/jest");
test('Fine-Grained Assertions', () => {
    const app = new cdk.App();
    const stack = new Iam.IamStack(app, 'IamStack');
    expect(stack).toHaveResource('AWS::IAM::Group', {
        GroupName: "iam-group-billing",
    });
    expect(stack).toHaveResource('AWS::IAM::User', {
        UserName: "iam-user-billing",
    });
});
test('Snapshot Tests', () => {
    const app = new cdk.App();
    const stack = new Iam.IamStack(app, 'IamStack');
    expect(assert_1.SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmlsbGluZy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNENBQTZDO0FBQzdDLHFDQUFzQztBQUN0QyxzQ0FBdUM7QUFDdkMsZ0NBQThCO0FBRTlCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLEVBQUU7SUFDakMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNoRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxDQUFDLGlCQUFpQixFQUFFO1FBQzlDLFNBQVMsRUFBRSxtQkFBbUI7S0FDL0IsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRTtRQUM3QyxRQUFRLEVBQUUsa0JBQWtCO0tBQzdCLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtJQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sQ0FBQyxtQkFBVSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDL0QsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTeW50aFV0aWxzIH0gZnJvbSAnQGF3cy1jZGsvYXNzZXJ0JztcbmltcG9ydCBjZGsgPSByZXF1aXJlKCdAYXdzLWNkay9jb3JlJyk7XG5pbXBvcnQgSWFtID0gcmVxdWlyZSgnLi4vbGliL2JpbGxpbmcnKTtcbmltcG9ydCAnQGF3cy1jZGsvYXNzZXJ0L2plc3QnO1xuXG50ZXN0KCdGaW5lLUdyYWluZWQgQXNzZXJ0aW9ucycsICgpID0+IHtcbiAgICBjb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xuICAgIGNvbnN0IHN0YWNrID0gbmV3IElhbS5JYW1TdGFjayhhcHAsICdJYW1TdGFjaycpO1xuICAgIGV4cGVjdChzdGFjaykudG9IYXZlUmVzb3VyY2UoJ0FXUzo6SUFNOjpHcm91cCcsIHtcbiAgICAgIEdyb3VwTmFtZTogXCJpYW0tZ3JvdXAtYmlsbGluZ1wiLFxuICAgIH0pO1xuICAgIGV4cGVjdChzdGFjaykudG9IYXZlUmVzb3VyY2UoJ0FXUzo6SUFNOjpVc2VyJywge1xuICAgICAgVXNlck5hbWU6IFwiaWFtLXVzZXItYmlsbGluZ1wiLFxuICAgIH0pO1xufSk7XG5cbnRlc3QoJ1NuYXBzaG90IFRlc3RzJywgKCkgPT4ge1xuICBjb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xuICBjb25zdCBzdGFjayA9IG5ldyBJYW0uSWFtU3RhY2soYXBwLCAnSWFtU3RhY2snKTtcbiAgZXhwZWN0KFN5bnRoVXRpbHMudG9DbG91ZEZvcm1hdGlvbihzdGFjaykpLnRvTWF0Y2hTbmFwc2hvdCgpO1xufSk7XG4iXX0=