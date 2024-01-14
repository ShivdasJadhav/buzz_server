import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { buzzDto } from './dto/newBuzz.dto';
import { BuzzService } from './buzz.service';

@Controller('buzz')
export class BuzzController {
    constructor(private BuzzService: BuzzService) { }
    @Get()
    async hello() {
        return "Hello and listening fo the Buzz";
    }
    @Get("/getall")
    async findAll(
        @Query()
        search
    ) {
        return this.BuzzService.findAll(search);
    }

    @Get("/getone/:id")
    async findOne(
        @Param("id")
        id: string
    ) {
        return this.BuzzService.findOne(id);
    }
    @Delete("/delete/:id")
    async deleteBuzz(
        @Param("id")
        id: string
    ) {
        return this.BuzzService.deleteBuzz(id);
    }
    @Post("/create")
    async createBuzz(
        @Body()
        buzz: buzzDto
    ) {
        return await this.BuzzService.createBuzz(buzz);
    }
    @Put("/update/:id")
    async updateBuzz(
        @Param("id")
        id: string,
        @Body()
        buzz: buzzDto
    ) {
        return await this.BuzzService.updateBuzz(id, buzz);
    }
}
