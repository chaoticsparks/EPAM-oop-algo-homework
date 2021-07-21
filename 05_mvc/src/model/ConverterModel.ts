import { BaseModel } from './BaseModel';
import {
  ConverterModelKeys,
  CurrencyConverterState
} from './currency-service/CurrencyStateService';

export abstract class ConverterModel extends BaseModel<CurrencyConverterState> {
  abstract updateEurAmount(converterModelKey: ConverterModelKeys, eurAmount: number): void;

  abstract updateRate(converterModelKey: ConverterModelKeys, rate: number): void;

  abstract updateConvertedAmount(converterModelKey: ConverterModelKeys, convertedAmount: number): void;
}
