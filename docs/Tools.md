# BACKEND TOOLS:

# GRAPHQL, EXPRESS, REDIS

# NODE JS

# DOCKER

# FRONT END TOOLS:

# REACT TS + VITE

# STYLED COMPONENTS, CSS, SCSS, MATERIAL UI

# Qery your GraphQL Server 🙈🙈

mutation Mutation($registerInput: registerInput!) {
registerUser(
registerInput: {
avatar: "stefan.png"
email: "stefan@gmail.com"
password: "pass1234"
profilId: "EDCCXDP"
role: CHATTER
username: "@stefan"
}
) {
... on UserData {
profilId
role
username
email
password
avatar
verified
}
}
}

mutation Mutation($loginInput: loginInput!) {
loginUser(loginInput: { email: "rolando@gmail.com", password: "pass1234" }) {
... on LoginResponse {
accessToken
user {
email
role
}
}
... on GraphqlError {
errorMessage
}
}
}

query Query {
logoutUser
}

query SearchUser($email: String!) {
searchUser(email: "stefan@gmail.com") {
... on UserData {
profilId
role
username
password
avatar
verified
}
}
}

mutation DeleteUser($profilId: String!) {
deleteUser(profilId: "EDCCXDP") {
email
}
}

query GetCurrentUser {
getCurrentUser {
email
password
}
}

query users {
users {
... on UsersSuccess {
users {
email
}
}
}
}

query RefreshAccessToken {
refreshAccessToken {
access_token
status
}
}

subscription Subscription {
newUser {
email
password
role
}
}
