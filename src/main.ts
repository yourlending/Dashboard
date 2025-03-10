import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "us-east-2_YmZeqkcE3",
      userPoolClientId: "2ckoUj7oprb3t1hmJqihrf43mg",
      identityPoolId: "",  // Leave empty if not using an Identity Pool
      loginWith: {
        email: true,
      },
    },
    signUpVerificationMethod: "code",
    userAttributes: {
      email: {
        required: true,
      },
    },
    allowGuestAccess: true,
    passwordFormat: {
      minLength: 8,
      requireLowercase: true,
      requireUppercase: true,
      requireNumbers: true,
      requireSpecialCharacters: true,
    },
  },
});
