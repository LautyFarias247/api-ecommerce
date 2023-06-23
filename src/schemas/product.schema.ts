import {Schema,Prop,SchemaFactory,raw } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>

@Schema({
	timestamps: true,
	versionKey: false
})
export class Product{
	@Prop({type:String, unique: true,required: true })
	name: string

	@Prop({type:String, required: true })
	category: string

	@Prop({type:Number, required: true })
	price: number

	@Prop(raw({
		url: String,
		public_id: String
	}))
	image: {
		url: string
		public_id: string
	}

	@Prop({ required: true })
	stock: number


}

export const ProductSchema = SchemaFactory.createForClass(Product)