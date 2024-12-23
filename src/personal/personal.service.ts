import { Injectable } from '@nestjs/common';
import { Personal } from 'src/model/personal';

@Injectable()
export class PersonalService {

    public findAllPersonal(): Personal[] {
        return [];
    }
}
