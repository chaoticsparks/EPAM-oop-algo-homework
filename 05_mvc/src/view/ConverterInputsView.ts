import { BaseView } from './BaseView';
import { ConverterView } from './ConverterView.interface';


export class ConverterInputsView extends BaseView implements ConverterView{
  getEurValue(): string {
    return this.getInputElement(`euro`).value;
  }

  getRateValue(): string {
    return this.getInputElement(`rate`).value;
  }

  getConvertedValue(): string {
    return this.getInputElement(`converted`).value;
  }

  setEurValue(value: string) {
    this.getInputElement(`euro`).value = value;
  }

  setRateValue(value: string) {
    this.getInputElement(`rate`).value = value;
  }

  setConvertedValue(value: string) {
    this.getInputElement(`converted`).value = value;
  }

  setEurListener(listener: () => void) {
    BaseView.setOnInputListener(this.getInputElement(`euro`), listener);
  }

  setRateListener(listener: () => void) {
    BaseView.setOnInputListener(this.getInputElement(`rate`), listener);
  }

  setConvertedListener(listener: () => void) {
    BaseView.setOnInputListener(this.getInputElement(`converted`), listener);
  }
}
