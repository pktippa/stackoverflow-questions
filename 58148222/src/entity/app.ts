import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import bcrypt from "bcryptjs";

@Entity()
@Unique(["username"])
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @Length(4, 20)
  username: string;
}