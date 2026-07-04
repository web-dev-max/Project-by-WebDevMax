import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async findById(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async create(email: string, password: string, name?: string) {
    return await this.prisma.user.create({
      data: { email, password, name },
    });
  }
}
