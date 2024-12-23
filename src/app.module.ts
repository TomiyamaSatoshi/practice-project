import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonalModule } from './personal/personal.module';
import { PersonalController } from './personal/personal.controller';

@Module({
  imports: [PersonalModule],
  controllers: [AppController],
  providers: [AppService, PersonalController],
})
export class AppModule { }
