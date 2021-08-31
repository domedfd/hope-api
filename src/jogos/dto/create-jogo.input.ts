import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateJogoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
