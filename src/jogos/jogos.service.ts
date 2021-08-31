import { Injectable } from '@nestjs/common';
import { CreateJogoInput } from './dto/create-jogo.input';
import { UpdateJogoInput } from './dto/update-jogo.input';

@Injectable()
export class JogosService {
  create(createJogoInput: CreateJogoInput) {
    return 'This action adds a new jogo';
  }

  findAll() {
    return `This action returns all jogos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jogo`;
  }

  update(id: number, updateJogoInput: UpdateJogoInput) {
    return `This action updates a #${id} jogo`;
  }

  remove(id: number) {
    return `This action removes a #${id} jogo`;
  }
}
