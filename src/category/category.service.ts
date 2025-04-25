import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()

export class CategoryService {
    constructor(private prisma: PrismaService){}

    filtrAll(){
        return this.prisma.category.findMany()
    } 
}