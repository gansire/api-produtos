import {
    Controller,
    Get,
    Param,
    Post,
    Patch,
    Delete,
    Body,
    Query,
  } from '@nestjs/common';
  import { ProductService } from './product.service';

  @Controller('product')
export class ProductController {
  constructor(private productservice: ProductService) {}

    @Get()
    findAll(@Query('name') name?: string) {
        if (name) {
            return this.productservice.findAll(name);
        }

        return this.productservice.searchAll();
    }

    @Get(":id")
    findOne(@Param('id') id: string){
        return this.productservice.findOne(id);
    }

    @Post() 
    create(@Body() body: any){
        return this.productservice.create(body)
    }

    @Patch(":id")
    update(@Param('id') id: string, @Body() body: any){
        return this.productservice.update(id, body);
    }

    @Delete(':id')
    delete(@Param("id") id: string){
        return this.productservice.delete(id)
    }
}