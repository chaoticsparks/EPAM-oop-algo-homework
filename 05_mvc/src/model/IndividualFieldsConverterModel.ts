import { ConverterModel } from './ConverterModel';
import {
  ConverterModelKeys
} from './currency-service/CurrencyStateService';


export class IndividualFieldsConverterModel extends ConverterModel {
  updateEurAmount(converterModelKey: ConverterModelKeys, eurAmount: number) {
    const { exchangeRate } = this.stateSubject.getState(converterModelKey);
    this.stateSubject.updateState(converterModelKey, {
      eur: eurAmount,
      converted: eurAmount * exchangeRate
    });
  }

  updateRate(converterModelKey: ConverterModelKeys, rate: number) {
    const { eur } = this.stateSubject.getState(converterModelKey);
    this.stateSubject.updateState(converterModelKey, {
      exchangeRate: rate,
      converted: eur * rate
    });
  }


  updateConvertedAmount(converterModelKey: ConverterModelKeys, convertedAmount: number) {
    const { exchangeRate } = this.stateSubject.getState(converterModelKey);
    this.stateSubject.updateState(converterModelKey, {
      eur: convertedAmount / exchangeRate,
      converted: convertedAmount
    });
  }
}
