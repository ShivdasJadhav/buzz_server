import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Buzz } from './schema/buzz.schema';

@Injectable()
export class BuzzService {
    constructor(
        @InjectModel(Buzz.name)
        private buzzModel: mongoose.Model<Buzz>
    ) { }

    async findAll(search) {
        let { name, type } = search;
        let data = (await this.buzzModel.find()).filter(item => (
            item.name.toLowerCase().includes(name.toLowerCase()) && (item.type.toLocaleLowerCase().includes(type.toLocaleLowerCase()))
        ));
        return data;
    }

    async findOne(id: string) {
        let data = await this.buzzModel.find({ _id:id });
        return data;
    }

    async createBuzz(buzz: Buzz) {
        let res = await this.buzzModel.create(buzz);
        return res
    }
    async updateBuzz(id: string, buzz: Buzz) {
        let res = await this.buzzModel.updateOne({ _id:id }, { ...buzz });
        return res;
    }

    async deleteBuzz(id: string) {
        let res = await this.buzzModel.findOneAndDelete({ _id: id });
        return res;
    }
}
