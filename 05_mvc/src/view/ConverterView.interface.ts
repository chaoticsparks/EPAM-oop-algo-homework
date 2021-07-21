export interface ConverterView {
  getEurValue(): string;

  getRateValue?(): string;

  getConvertedValue(): string;

  setEurValue(value: string): void;

  setRateValue(value: string): void;

  setConvertedValue(value: string): void;

  setEurListener(listener: () => void): void;

  setRateListener?(listener: () => void): void;

  setConvertedListener(listener: () => void): void;
}
