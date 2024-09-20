import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log(`User with id ${this.id} has been inserted`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`User with id ${this.id} has been updated`);
  }

  @AfterRemove()
  logRemove() {
    console.log(`User with id ${this.id} has been removed`);
  }
}
