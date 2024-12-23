import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonalModule } from './personal/personal.module';
import { PersonalController } from './personal/personal.controller';
import { PersonalService } from './personal/personal.service';

@Module({
  imports: [PersonalModule],
  controllers: [
    AppController,
    PersonalController
  ],
  providers: [
    AppService,
    PersonalService,
  ],
})
export class AppModule { }
