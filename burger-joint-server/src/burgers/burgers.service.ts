import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPagedCollection } from 'src/shared/IPagedCollection.interface';
import { PagedCollectionParams } from 'src/shared/PagedCollectionParams';
import { Like, Repository } from 'typeorm';
import { CreateBurgerDto } from './dto/create-burger.dto';
import { Burger } from './entities/burger.entity';

@Injectable()
export class BurgersService {
  constructor(
    @InjectRepository(Burger)
    private burgerRepository: Repository<Burger>,
  ) { }

  async create(createBurgerDto: CreateBurgerDto): Promise<Burger> {
    const burger = this.burgerRepository.create(createBurgerDto);
    await this.burgerRepository.save(burger);
    return burger;
  }

  async findAll(pagedCollectionParams: PagedCollectionParams): Promise<IPagedCollection<Burger>> {
    const [data, total] = await this.burgerRepository.findAndCount({
      skip: pagedCollectionParams?.skip,
      take: pagedCollectionParams?.take,
      where: { name: pagedCollectionParams?.filter !== null ? Like(`%${pagedCollectionParams.filter}%`) : Like('%%') }
    });

    return {
      collection: data,
      requested: pagedCollectionParams.take,
      skip: pagedCollectionParams.skip,
      total: total
    };
  }

  async findOne(id: number): Promise<Burger> {
    return this.burgerRepository.findOne(id);
  }

  async findRandom(): Promise<Burger> {
    const burgers = await this.burgerRepository.find();
    const randomBurgerIndex = Math.floor(Math.random() * burgers.length);
    console.log(randomBurgerIndex)
    return burgers[randomBurgerIndex];
  };
}
