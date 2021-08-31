import { Module } from '@nestjs/common';
import { JogosService } from './jogos.service';
import { JogosResolver } from './jogos.resolver';

@Module({
  providers: [JogosResolver, JogosService]
})
export class JogosModule {}
