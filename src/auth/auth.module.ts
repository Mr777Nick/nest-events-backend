import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LocalStategy } from "./local.strategy";
import { User } from "./user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [LocalStategy]
})
export class AuthModule {}