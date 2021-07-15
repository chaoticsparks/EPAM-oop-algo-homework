import { ConverterController } from './controllers/ConverterController';
import { AllFieldsConverterModel } from './model/AllFieldsConverterModel';
import {
  ConverterModelKeys,
  CurrencyStateService
} from './model/currency-service/CurrencyStateService';
import { IndividualFieldsConverterModel } from './model/IndividualFieldsConverterModel';
import { ControlsView } from './view/ControlsView';
import { ConverterInputsView } from './view/ConverterInputsView';
import { ConverterSlidersView } from './view/ConverterSlidersView';
import { PanelView } from './view/PanelView';


const converterStateSubject = CurrencyStateService.getStateSubject();

const individualFieldsModel = new IndividualFieldsConverterModel(converterStateSubject);
const allFieldsModel = new AllFieldsConverterModel(converterStateSubject);

const controlsView = new ControlsView('controls');
const panelView = new PanelView('converter-panels');

const eurToUsdInputsView = new ConverterInputsView('usdInputsConverter');
const eurToUahInputsView = new ConverterInputsView('uahInputsConverter');
const eurToGbrInputsView = new ConverterInputsView('gbrInputsConverter');

const eurToUsdSlidersView = new ConverterSlidersView('usdSlidersConverter');
const eurToUahSlidersView = new ConverterSlidersView('uahSlidersConverter');
const eurToGbrSlidersView = new ConverterSlidersView('gbrSlidersConverter');

new ConverterController(
  eurToUsdInputsView,
  eurToUsdSlidersView,
  controlsView,
  panelView,
  individualFieldsModel,
  allFieldsModel,
  ConverterModelKeys.EurToUsd
)
;

new ConverterController(
  eurToUahInputsView,
  eurToUahSlidersView,
  controlsView,
  panelView,
  individualFieldsModel,
  allFieldsModel,
  ConverterModelKeys.EurToUah
)
;

new ConverterController(
  eurToGbrInputsView,
  eurToGbrSlidersView,
  controlsView,
  panelView,
  individualFieldsModel,
  allFieldsModel,
  ConverterModelKeys.EurToGbr
)
;

