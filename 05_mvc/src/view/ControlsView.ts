import { BaseView } from './BaseView';


export class ControlsView extends BaseView {
  setModeAllInputListener(listener: () => void) {
    BaseView.setOnInputListener(this.getInputElement(`mode-all`), listener);
  }

  setModeIndividualInputListener(listener: () => void) {
    BaseView.setOnInputListener(this.getInputElement(`mode-individual`), listener);
  }

  setControlSlidersInputListener(listener: () => void) {
    BaseView.setOnInputListener(this.getInputElement(`control-sliders`), listener);
  }

  setControlFieldsInputListener(listener: () => void) {
    BaseView.setOnInputListener(this.getInputElement(`control-fields`), listener);
  }
}
