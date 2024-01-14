import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Buzz {
    @Prop()
    name: String

    @Prop()
    type: String

    @Prop()
    date: String

    @Prop()
    price: Number

    @Prop()
    qty: Number

    @Prop()
    disc: Number

    @Prop()
    total: Number

}

export const buzzSchema = SchemaFactory.createForClass(Buzz)