import { PartialType } from '@nestjs/swagger';
import { CreateStatemetricDto } from './create-statemetric.dto';

export class UpdateStatemetricDto extends PartialType(CreateStatemetricDto) {}
