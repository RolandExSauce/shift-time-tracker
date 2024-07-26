some graphql operations:

mutation Mutation($loginInput: loginInput!) {
  loginUser(loginInput: {personalNumber: "WSM-00", password: "pass1234" }) {
    ... on LoginResponse {
      user {
        firstName
        employeeRole
        lastName
        password
        personalNumber
      }
      accessToken
    }
    ... on GraphqlError {
      errorMessage
    }
  }
}


mutation CreateUser($createUserInput: createUserInput!) {
  createUser(createUserInput: {
        
    employeeRole: ADMIN,
    firstName: "Roland",
    lastName: "Loulengo",
    password: "pass1234",
    teamLeaderName: "Markus",
    userDepartment: IT

  }) {
    ... on User {
      employeeRole
      firstName
      lastName
      teamLeaderName
    }
    ... on GraphqlError {
      errorMessage
    }
  }
}



}