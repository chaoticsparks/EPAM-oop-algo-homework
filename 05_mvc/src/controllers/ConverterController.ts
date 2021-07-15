import { AllFieldsConverterModel } from '../model/AllFieldsConverterModel';
import { ConverterModel } from '../model/ConverterModel';
import { ConverterModelKeys } from '../model/currency-service/CurrencyStateService';
import { IndividualFieldsConverterModel } from '../model/IndividualFieldsConverterModel';
import { Observer } from '../model/StateSubject';
import { ControlsView } from '../view/ControlsView';
import { ConverterInputsView } from '../view/ConverterInputsView';
import { ConverterSlidersView } from '../view/ConverterSlidersView';
import { ConverterView } from '../view/ConverterView.interface';
import { PanelView } from '../view/PanelView';


export class ConverterController implements Observer {
  private model!: ConverterModel;
  private converterView: ConverterView;

  constructor(
    private converterInputsView: ConverterInputsView,
    private converterSlidersView: ConverterSlidersView,
    private controlsView: ControlsView,
    private panelView: PanelView,
    private individualFieldsModel: IndividualFieldsConverterModel,
    private allFieldsModel: AllFieldsConverterModel,
    private modelKey: ConverterModelKeys
  ) {
    this.converterView = converterInputsView;
    this.setModel(individualFieldsModel);
    this.initializeViewListeners();
  }

  private initializeViewListeners() {
    this.setConverterListeners(this.converterInputsView);
    this.setConverterListeners(this.converterSlidersView);
    this.setConrolsListeners();
  }

  private setModel(model: ConverterModel) {
    this.model = model;
    this.model.attachObserver(this);
    this.update();
  }

  private setConverterListeners(converterView: ConverterView) {
    converterView.setEurListener(() => {
      this.model.updateEurAmount(this.modelKey, Number(converterView.getEurValue()));
    });

    if (converterView.setRateListener) {
      converterView.setRateListener(() => {
        if (converterView.getRateValue) {
          this.model.updateRate(this.modelKey, Number(converterView.getRateValue()));
        }
      });
    }

    converterView.setConvertedListener(() => {
      this.model.updateConvertedAmount(
        this.modelKey,
        Number(converterView.getConvertedValue())
      );
    });
  }

  private setConrolsListeners() {
    this.controlsView.setModeIndividualInputListener(() => {
      this.setModel(this.individualFieldsModel);
    });

    this.controlsView.setModeAllInputListener(() => {
      this.setModel(this.allFieldsModel);
    });

    this.controlsView.setControlSlidersInputListener(() => {
      this.panelView.showPanelWithSliders();
      this.converterView = this.converterSlidersView;
      this.update();
    });

    this.controlsView.setControlFieldsInputListener(() => {
      this.panelView.showPanelWithInputs();
      this.converterView = this.converterInputsView;
      this.update();
    });
  }

  update(): void {
    const { eur, exchangeRate, converted } = this.model.getModel(this.modelKey);
    this.converterView.setEurValue(String(eur));
    this.converterView.setRateValue(String(exchangeRate));
    this.converterView.setConvertedValue(String(converted));
  }
}
