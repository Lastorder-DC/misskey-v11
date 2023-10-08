import {MigrationInterface, QueryRunner} from "typeorm";

export class smtpLength1696759718023 implements MigrationInterface {
    name = 'smtpLength1696759718023'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meta" ALTER COLUMN "email" TYPE character varying(1024)`, undefined);
        await queryRunner.query(`ALTER TABLE "meta" ALTER COLUMN "smtpHost" TYPE character varying(1024)`, undefined);
        await queryRunner.query(`ALTER TABLE "meta" ALTER COLUMN "smtpUser" TYPE character varying(1024)`, undefined);
        await queryRunner.query(`ALTER TABLE "meta" ALTER COLUMN "smtpPass" TYPE character varying(1024)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // noop
    }

}
