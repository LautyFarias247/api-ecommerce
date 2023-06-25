import {Schema,Prop,SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose';

export type SubcategoryDocument = HydratedDocument<Subcategory>

@Schema({
	timestamps: true,
	versionKey: false
})
export class Subcategory{
	@Prop({type:String, unique: true,required: true })
	name: string
}

export const SubcategorySchema = SchemaFactory.createForClass(Subcategory)