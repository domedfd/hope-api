import { CreateJogoInput } from './create-jogo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateJogoInput extends PartialType(CreateJogoInput) {
  @Field(() => Int)
  id: number;
}
