import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BurgersController } from './burgers.controller';
import { BurgersService } from './burgers.service';
import { Burger } from './entities/burger.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Burger])],
  controllers: [BurgersController],
  providers: [BurgersService],
  exports: [TypeOrmModule]
})
export class BurgersModule { }
