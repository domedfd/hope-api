import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Jogo {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
