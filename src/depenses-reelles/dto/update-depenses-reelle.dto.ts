import { PartialType } from '@nestjs/mapped-types';
import { CreateDepensesReelleDto } from './create-depenses-reelle.dto';

export class UpdateDepensesReelleDto extends PartialType(CreateDepensesReelleDto) {}
