import { StateSubject } from '../StateSubject';
import { getExchangeRateData } from './backend-api-mock';


export interface CurrencyConverterState {
  [ ConverterModelKeys.EurToUsd ]: ConverterFields,
  [ ConverterModelKeys.EurToUah ]: ConverterFields,
  [ ConverterModelKeys.EurToGbr ]: ConverterFields
}

export enum ConverterModelKeys {
  EurToUsd = 'eurToUsd',
  EurToUah = 'eurToUah',
  EurToGbr = 'eurToGbr',
}

export interface ConverterFields {
  eur: number;
  exchangeRate: number;
  converted: number;
}

export class CurrencyStateService {

  static getStateSubject() {
    return new StateSubject<CurrencyConverterState>(CurrencyStateService.getInitialState());
  }

  private static getInitialState(): CurrencyConverterState {
    const {
      exchangeRates: {
        eur: {
          usd: usdExchangeRate,
          gbr: gbrExchangeRate,
          uah: uahExchangeRate
        }
      }
    } = getExchangeRateData();
    return {
      eurToUsd: {
        eur: 1,
        exchangeRate: usdExchangeRate,
        converted: usdExchangeRate
      },
      eurToUah: {
        eur: 1,
        exchangeRate: uahExchangeRate,
        converted: uahExchangeRate
      },
      eurToGbr: {
        eur: 1,
        exchangeRate: gbrExchangeRate,
        converted: gbrExchangeRate
      }
    };
  }
}
