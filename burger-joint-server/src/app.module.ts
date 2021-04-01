import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BurgersModule } from './burgers/burgers.module';
import { Burger } from './burgers/entities/burger.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'burger',
      entities: [Burger],
      synchronize: true,
    }),
    BurgersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
