import { BadRequestException, Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { IPagedCollection } from 'src/shared/IPagedCollection.interface';
import { BurgersService } from './burgers.service';
import { CreateBurgerDto } from './dto/create-burger.dto';
import { Burger } from './entities/burger.entity';

@ApiTags("burgers")
@Controller('burgers')
export class BurgersController {
  constructor(private readonly burgersService: BurgersService) { }

  @Post()
  async create(@Body() createBurgerDto: CreateBurgerDto): Promise<Burger> {
    return await this.burgersService.create(createBurgerDto);
  }

  @Get()
  async get(@Req() request: Request): Promise<IPagedCollection<Burger>> {
    return await this.burgersService.findAll({
      skip: request.query.hasOwnProperty('skip') ? +request.query.skip : 0,
      take: request.query.hasOwnProperty('take') ? +request.query.take : 25,
      filter: request.query.hasOwnProperty('filter') ? request.query.filter.toString() : null
    });
  }

  @Get('random')
  async getRandom(): Promise<Burger> {
    const burger = await this.burgersService.findRandom();
    if (burger) {
      return burger;
    }

    throw new BadRequestException('No Burgers found');
  }

  @Get(':id')
  async getOne(@Param() params): Promise<Burger> {
    const burger = await this.burgersService.findOne(+params.id);
    if (burger) {
      return burger;
    }

    throw new BadRequestException('Burger not found');
  }
}
