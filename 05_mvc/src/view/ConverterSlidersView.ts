import { BaseView } from './BaseView';
import { ConverterView } from './ConverterView.interface';


export class ConverterSlidersView extends BaseView implements ConverterView{
  getEurValue(): string {
    return this.getInputElement(`euro`).value;
  }

  getConvertedValue(): string {
    return this.getInputElement(`converted`).value;
  }

  setEurValue(value: string) {
    this.getInputElement(`euro`).value = value;
    this.getHTMLElement(`euro`).innerText = value;
  }

  setConvertedValue(value: string) {
    this.getInputElement(`converted`).value = value;
    this.getHTMLElement(`converted`).innerText = value;
  }

  setRateValue(value: string) {
    this.getHTMLElement(`rate`).innerText = value;
  }

  setEurListener(listener: () => void) {
    BaseView.setOnInputListener(this.getInputElement(`euro`), listener);
  }

  setConvertedListener(listener: () => void) {
    BaseView.setOnInputListener(this.getInputElement(`converted`), listener);
  }
}
