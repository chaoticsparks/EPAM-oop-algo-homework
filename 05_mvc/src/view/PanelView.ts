import { BaseView } from './BaseView';


export class PanelView extends BaseView {
  showPanelWithSliders() {
    this.getHTMLElement(`sliders-panel`).style.display = 'block';
    this.getHTMLElement(`inputs-panel`).style.display = 'none';
  }

  showPanelWithInputs() {
    this.getHTMLElement(`sliders-panel`).style.display = 'none';
    this.getHTMLElement(`inputs-panel`).style.display = 'block';
  }
}
