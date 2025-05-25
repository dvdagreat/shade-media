import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity( { name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({  })
  title: string;
  
  @Column({ type: 'text', nullable: true })
  description: string;
}
