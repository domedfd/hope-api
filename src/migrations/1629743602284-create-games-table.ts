import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createGamesTable1629743602284 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'games',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'nivel', type: 'int' },
          { name: 'array', type: 'integer ARRAY', isNullable: true },
          { name: 'position', type: 'int', default: 1 },
          { name: 'done', type: 'bool', isNullable: true },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('games');
  }
}
