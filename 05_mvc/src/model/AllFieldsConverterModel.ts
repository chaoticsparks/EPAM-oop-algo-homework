import {
  ConverterModel
} from './ConverterModel';
import {
  ConverterModelKeys
} from './currency-service/CurrencyStateService';


export class AllFieldsConverterModel extends ConverterModel {
  updateEurAmount(_converterModelKey: ConverterModelKeys, eurAmount: number) {
    this.updateEurAmountModel(ConverterModelKeys.EurToGbr, eurAmount);
    this.updateEurAmountModel(ConverterModelKeys.EurToUah, eurAmount);
    this.updateEurAmountModel(ConverterModelKeys.EurToUsd, eurAmount);
  }

  private updateEurAmountModel(converterModelKey: ConverterModelKeys, eurAmount: number) {
    this.stateSubject.updateState(converterModelKey, {
      eur: eurAmount,
      converted: eurAmount * this.stateSubject.getState(converterModelKey).exchangeRate
    });
  }

  updateRate(_converterModelKey: ConverterModelKeys, rate: number) {
    this.updateRateModel(ConverterModelKeys.EurToUsd, rate);
    this.updateRateModel(ConverterModelKeys.EurToUah, rate);
    this.updateRateModel(ConverterModelKeys.EurToGbr, rate);
  }

  private updateRateModel(converterModelKey: ConverterModelKeys, rate: number) {
    const { eur } = this.stateSubject.getState(converterModelKey);
    this.stateSubject.updateState(converterModelKey, {
      exchangeRate: rate,
      converted: eur * rate
    });
  }


  updateConvertedAmount(_converterModelKey: ConverterModelKeys, convertedAmount: number) {
    this.updateConvertedAmountModel(ConverterModelKeys.EurToGbr, convertedAmount);
    this.updateConvertedAmountModel(ConverterModelKeys.EurToUsd, convertedAmount);
    this.updateConvertedAmountModel(ConverterModelKeys.EurToUah, convertedAmount);
  }

  private updateConvertedAmountModel(
    converterModelKey: ConverterModelKeys,
    convertedAmount: number
  ) {
    const { exchangeRate } = this.stateSubject.getState(converterModelKey);
    this.stateSubject.updateState(converterModelKey, {
      eur: convertedAmount / exchangeRate,
      converted: convertedAmount
    });
  }
}
