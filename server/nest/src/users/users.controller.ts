import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    findAll(){
        return [{id:1,name:'asaf'},{id:2,name:'asi'},{id:3,name:'asafush'},{id:4,name:'asafiko'}]
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return {id}
    }

}
