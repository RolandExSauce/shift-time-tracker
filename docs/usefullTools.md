Download graphql schema
npx apollo service:download --endpoint=http://localhost:4000/ graphql-schema.json

generating types with codegen:
https://the-guild.dev/graphql/codegen/docs/getting-started/installation

command: npx graphql-codegen init

file upload with preview
https://www.npmjs.com/package/file-upload-with-preview


Random Key: 
Run: "node" to run any command, type: require("crypto").randomBytes(64).toString("hex")

generate rsa keys: ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key

encode to base64:

https://www.base64encode.org/


# generate private key
openssl genrsa -out private.pem 2048
# extatract public key from it
openssl rsa -in private.pem -pubout > public.pem
https://devopscube.com/create-self-signed-certificates-openssl/


docker inspect network bridge => Default bridge to connect hosts to docker containers 

# #######################################################################################################################

# nginx config file example:

server {

listen   443;

ssl    on;
ssl_certificate    /etc/ssl/server.crt;
ssl_certificate_key    /etc/ssl/server.key;

server_name your.domain.com;
access_log /var/log/nginx/nginx.vhost.access.log;
error_log /var/log/nginx/nginx.vhost.error.log;
location / {
root   /home/www/public_html/your.domain.com/public/;
index  index.html;
}

}

# #######################################################################################################################

# CHACHING WITH REDIS 

npm install keyv @keyv/redis @apollo/utils.keyvadapter

cache: new KeyvAdapter(new Keyv("redis://user:pass@localhost:6379"))

import Keyv from "keyv";
import { KeyvAdapter } from "@apollo/utils.keyvadapter";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  
  cache: new KeyvAdapter(
    new Keyv("redis://user:pass@localhost:6379", {
      sentinels: [
        { host: "localhost", port: 26379 },
        { host: "localhost", port: 26380 },
      ],
    })
  ),
  
});

# #######################################################################################################################

# PRISMA 

docs: https://www.prisma.io/docs/reference/api-reference/command-reference

yarn add prisma --save-dev

npx prisma 

prisma -v 

prisma init => WILL CREATE A SCHEMA, THEN IF YOU ALREADY HAVE DATA ON YOUR DATABASE YOU CAN e.g RUN => prisma db pull => turn database schema to prisma schema 


prisma generate to generate prisma client 



