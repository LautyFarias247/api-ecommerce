import { IsString,IsNumber,IsObject,IsOptional } from 'class-validator'

export class UpdateProductDto {
	@IsString()
	@IsOptional()
	name?: string

	@IsString()
	@IsOptional()
	category?: string

	@IsNumber()
	@IsOptional()
	price?: boolean

	@IsObject()
	@IsOptional()
	image?: object

	@IsNumber()
	@IsOptional()
	stock?: number
}