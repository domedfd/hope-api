import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { JogosService } from './jogos.service';
import { Jogo } from './entities/jogo.entity';
import { CreateJogoInput } from './dto/create-jogo.input';
import { UpdateJogoInput } from './dto/update-jogo.input';

@Resolver(() => Jogo)
export class JogosResolver {
  constructor(private readonly jogosService: JogosService) {}

  @Mutation(() => Jogo)
  createJogo(@Args('createJogoInput') createJogoInput: CreateJogoInput) {
    return this.jogosService.create(createJogoInput);
  }

  @Query(() => [Jogo], { name: 'jogos' })
  findAll() {
    return this.jogosService.findAll();
  }

  @Query(() => Jogo, { name: 'jogo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.jogosService.findOne(id);
  }

  @Mutation(() => Jogo)
  updateJogo(@Args('updateJogoInput') updateJogoInput: UpdateJogoInput) {
    return this.jogosService.update(updateJogoInput.id, updateJogoInput);
  }

  @Mutation(() => Jogo)
  removeJogo(@Args('id', { type: () => Int }) id: number) {
    return this.jogosService.remove(id);
  }
}
