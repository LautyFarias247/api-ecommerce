import { Body,Controller,Get,Post,Put,Delete,Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { UpdateProductDto } from 'src/dto/update-product.dto';

@Controller('products')
export class ProductsController {
	constructor(private productsService: ProductsService) { }

	@Get()
	findAllProducts() {
		return this.productsService.findAllProducts()
	}

	@Get(':_id')
	findOneProduct(@Param('_id') _id:string) {
		return this.productsService.findOneProduct(_id)
	}

	@Post()
	createProduct(@Body() body: CreateProductDto) {
		return this.productsService.createProduct(body)
	}

	@Put(':_id')
	updateProduct(@Param('_id') _id: string,@Body() body: UpdateProductDto) {
		return this.productsService.updateProduct(_id,body)
	}
	@Delete(':_id')
	deleteProduct(@Param('_id') id: string) {
		console.log(id);

		return this.productsService.deleteProduct(id)
	}
}
