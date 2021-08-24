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

  arrayrandom(columns) {
    const matrix = [];
    for (let i = 0; i < 9; i++) {
      const position = Array.from({ length: columns }, (_, i) => 0);
      const pBoom = Math.floor(Math.random() * columns);
      position[pBoom] = 1;

      matrix[i] = position;
    }
    return matrix;
  }

  async create(createGameDto: CreateGameDto) {
    const game = this.gameRepo.create(createGameDto);
    const newGame = await this.gameRepo.save(game);
    console.log(newGame.id);
    newGame.array = this.arrayrandom(3);
    const updateResult = await this.gameRepo.update(newGame.id, newGame);
    if (!updateResult.affected) {
      throw new EntityNotFoundError(Game, newGame);
    }
    newGame.array = [0];
    return newGame;
  }

  findAll() {
    return this.gameRepo.find();
  }

  findOne(id: number) {
    return this.gameRepo.findOne(id);
  }

  async update(id: number, updateGameDto: UpdateGameDto) {
    const updateResult = await this.gameRepo.update(id, updateGameDto);
    if (!updateResult.affected) {
      throw new EntityNotFoundError(Game, id);
    }
    return this.gameRepo.findOne(id);
  }

  async remove(id: number) {
    const removeResult = await this.gameRepo.delete(id);
    if (!removeResult.affected) {
      throw new EntityNotFoundError(Game, id);
    }
    return this.gameRepo.findOne(id);
  }
}
