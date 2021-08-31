import { Test, TestingModule } from '@nestjs/testing';
import { JogosResolver } from './jogos.resolver';
import { JogosService } from './jogos.service';

describe('JogosResolver', () => {
  let resolver: JogosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JogosResolver, JogosService],
    }).compile();

    resolver = module.get<JogosResolver>(JogosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
