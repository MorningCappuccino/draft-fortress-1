import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EntityModule } from './entity/entity.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://Fortrees:Nb5KO8hJwUGfggTF@cluster0.6y9zr.mongodb.net/?retryWrites=true&w=majority`,
    ),
    EntityModule,
  ],
})
export class AppModule {}
