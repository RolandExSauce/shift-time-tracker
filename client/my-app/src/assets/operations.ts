import { gql } from "@apollo/client";

export const REGISTER_USER_MUTATION = gql`
  mutation CreateUser($createUserInput: createUserInput!) {
    createUser(createUserInput: $createUserInput) {
      ... on User {
        employeeRole
        userDepartment
        firstName
      }
      ... on GraphqlError {
        errorMessage
      }
    }
  }
`;
export const UPLOAD_FILE = gql`
  mutation singleUpload($file: Upload!) {
    fileUpload(file: $file)
  }
`;
