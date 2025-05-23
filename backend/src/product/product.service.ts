import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  searchAll(){
    return this.prisma.product.findMany()
  }

  findAll(name?: string){
    return this.prisma.product.findMany({
      where: name ? { name: { contains: name.toLowerCase() } } : undefined,
      include:{ category : true}
    })
  }

  findOne(id: string){
    return this.prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });
  }

  create(body: any) {
    return this.prisma.product.create({
      data: {
        name: body.name,
        qty: body.qty,
        price: body.price,
        photo: body.photo,
        categoryId: body.categoryId,
      },
      include: { category: true },
    });
  }

  update(id: string, body: any) {
    return this.prisma.product.update({
      where: { id },
      data: {
        ...body,
        categories: body.categories ? 
          {
            set: body.categories.map((id: string) => ({ id })),
          }
          : undefined,
      },
    });
  }

  async delete(id: string){
    const product = await this.prisma.product.findUnique({
      where: {id}
    })
    
    if (!product) {
      throw new Error('Produto não encontrado!');
    }
  
    return this.prisma.product.delete({
      where: { id },
    });
  }
}