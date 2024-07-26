import { ObjectType, Field } from '@nestjs/graphql';
import { errDescr, successMsgDescr } from './graphql.fields.descriptions';

//global types

// Define custom GraphqlError type
@ObjectType({ description: errDescr })
export class GraphqlError {
  @Field()
  customError: string;
}

// Define success message
@ObjectType({ description: successMsgDescr })
export class Success {
  @Field()
  successMsg: string;
}
