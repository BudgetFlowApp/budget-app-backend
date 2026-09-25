import { PartialType } from '@nestjs/mapped-types';
import { CreateDepensesPrevueDto } from './create-depenses-prevue.dto';

export class UpdateDepensesPrevueDto extends PartialType(CreateDepensesPrevueDto) {}
