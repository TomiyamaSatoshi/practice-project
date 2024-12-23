import { Controller, Get } from '@nestjs/common';
import { Personal } from 'src/model/personal';
import { PersonalService } from './personal.service';

@Controller('personal')
export class PersonalController {

    constructor(private readonly personalService: PersonalService) { };

    @Get('find-all')
    public findAllPersonal(): Personal[] {
        return this.personalService.findAllPersonal();
    }
}
