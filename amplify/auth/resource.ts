import { defineAuth } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * This explicitly grants permission to manage users in Cognito
 */

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userPool: {
    id: "us-east-2_YmZeqkcE3",
    clientId: "2ckoUj7oprb3t1hmJqihrf43mg",
  },
  access: (allow) => [
    allow.cognitoUserPool.to(["manageUsers", "manageGroups", "managePasswordRecovery"]),
  ],
});
