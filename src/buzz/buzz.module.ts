import { Module } from '@nestjs/common';
import { BuzzController } from './buzz.controller';
import { BuzzService } from './buzz.service';
import { MongooseModule } from '@nestjs/mongoose';
import { buzzSchema } from './schema/buzz.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Buzz", schema: buzzSchema }])],
  controllers: [BuzzController],
  providers: [BuzzService]
})
export class BuzzModule { }
