import { MigrationInterface, QueryRunner } from "typeorm";

export class AddImageToStoreMigration1684349045822
  implements MigrationInterface
{
  name = "AddImageToStoreMigration1684349045822";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const query =
      'ALTER TABLE "store" ADD COLUMN IF NOT EXISTS "image" character varying;';
    await queryRunner.query(query);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const query = 'ALTER TABLE "store" DROP COLUMN "image";';
    await queryRunner.query(query);
  }
}
