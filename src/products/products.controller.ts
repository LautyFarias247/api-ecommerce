import { Body,Controller,Get,Post,Put,Delete,Param,NotFoundException,ConflictException,HttpCode } from '@nestjs/common';
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
	async findOneProduct(@Param('_id') _id: string) {

		const product = await this.productsService.findOneProduct(_id)
		if (!product) throw new NotFoundException('Producto no encontrado')
		return product
	}

	@Post()
	async createProduct(@Body() body: CreateProductDto) {
		try {
			return await this.productsService.createProduct(body)

		} catch (error) {
			if (error.code === 11000) throw new ConflictException('Producto ya existente')
			throw error
		}
	}

	@Put(':_id')
	async updateProduct(@Param('_id') _id: string,@Body() body: UpdateProductDto) {
		const updatedProduct = await this.productsService.updateProduct(_id,body)
		if (!updatedProduct) throw new NotFoundException('Producto no encontrado')
		return updatedProduct
	}
	@Delete(':_id')
	@HttpCode(204)
	async deleteProduct(@Param('_id') _id: string) {
		const product = await this.productsService.deleteProduct(_id)
		if (!product) throw new NotFoundException('Producto no encontrado')
	}
}
