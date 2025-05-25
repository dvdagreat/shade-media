import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  
  constructor(@InjectRepository(Post) private readonly myRepo: Repository<Post>) {
    
  }
  
  async create(createPostDto: CreatePostDto) {
    const post = this.myRepo.create(createPostDto);
       
    return await this.myRepo.save(post);
  }

  async findAll() {
    return await this.myRepo.find();
  }

  async findOne(id: number) {
    return await this.myRepo.findOne({
      where: {
        id
      }
    })
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.myRepo.findOne({
      where: {
        id
      }
    })
    if(!post) {
      throw new NotFoundException()
    }
    
    Object.assign(post, updatePostDto);
    
    return await this.myRepo.save(post)
  }

  async remove(id: number) {
    const post = await this.myRepo.findOne({
      where: {
        id
      }
    })
    if(!post) {
      throw new NotFoundException()
    }
    
    return await this.myRepo.remove(post)
  }
}
