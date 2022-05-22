import { Specification } from 'src/modules/cars/entities/Specification'

interface ICreatespecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository{
  findByName (name: string): Specification | undefined;
  create ({ name, description }: ICreatespecificationDTO): void;
  all (): Specification[];
}

export { ISpecificationsRepository, ICreatespecificationDTO }
