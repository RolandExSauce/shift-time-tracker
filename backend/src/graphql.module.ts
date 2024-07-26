import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule, registerEnumType } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { join } from 'path';
import {
  UserRole,
  UserDepartment,
  DeviceModell,
  ConfigOptions,
} from './api/types';

//register enums
registerEnumType(UserRole, {
  name: 'UserRole',
  description: 'all available roles for users',
});

registerEnumType(UserDepartment, {
  name: 'UserDepartment',
  description: 'all user departments',
});

registerEnumType(DeviceModell, {
  name: 'DeviceModell',
  description: 'all available device models',
});

registerEnumType(ConfigOptions, {
  name: 'ConfigOptions',
  description: 'distinguish between three different config options',
});
/********************************************************************* */

//config graphql settings
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), `./schema.graphql`),
      path: '/graphql',
      //csrfPrevention: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      //transformSchema: schema => upperDirectiveTransformer(schema, 'upper'),
      //installSubscriptionHandlers: true,
      context: ({ req, res }: { req: Request; res: Response }) => ({
        req,
        res,
      }),
    }),
  ],
})
export class GraphQLConfigModule {}
