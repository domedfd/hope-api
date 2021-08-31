import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gameRepo: Repository<Game>,
  ) {}

  arrayrandom(columns, valor) {
    const matrix = [];
    for (let i = 0; i < 8; i++) {
      const position = Array.from({ length: columns }, (_, i) => valor);
      const pBoom = Math.floor(Math.random() * columns);
      position[pBoom] = 1;

      matrix[i] = position;
    }
    return matrix;
  }

  async create(createGameDto: CreateGameDto) {
    const game = this.gameRepo.create(createGameDto);
    const newGame = await this.gameRepo.save(game);
    // console.log(newGame.id);
    newGame.array = this.arrayrandom(3, 0);
    const updateResult = await this.gameRepo.update(newGame.id, newGame);
    if (!updateResult.affected) {
      throw new EntityNotFoundError(Game, newGame);
    }
    newGame.array = this.arrayrandom(3, 1);
    return newGame;
  }

  findAll() {
    return this.gameRepo.find();
  }

  findOne(id: string) {
    return this.gameRepo.findOne(id);
  }

  fakematrix = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];
  async update(id: string, updateGameDto: UpdateGameDto) {
    const pPosition = (await this.gameRepo.findOne(id)).position;
    const matrix = (await this.gameRepo.findOne(id)).array as any;
    console.log(+pPosition - 1);
    console.log(this.fakematrix);
    this.fakematrix[+pPosition - 1] = matrix[+pPosition - 1];
    const resultado = this.fakematrix;
    console.log(this.fakematrix);

    // for (let i = 0; i < +pPosition; i++) {
    //   console.log(i);
    // }
    const newPosition = await this.gameRepo.findOne(id);
    // console.log(updateGameDto);
    if (pPosition < matrix.length) {
      newPosition.position++;
    }
    // console.log(newPosition.position);
    const updateResult = await this.gameRepo.update(id, {
      position: newPosition.position,
    });
    if (!updateResult.affected) {
      throw new EntityNotFoundError(Game, id);
    }

    return resultado;
  }

  async remove(id: string) {
    const removeResult = await this.gameRepo.delete(id);
    if (!removeResult.affected) {
      throw new EntityNotFoundError(Game, id);
    }
    return this.gameRepo.findOne(id);
  }
}
