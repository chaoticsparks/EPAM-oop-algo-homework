import { Observer, StateSubject } from './StateSubject';


export abstract class BaseModel<State> {
  constructor(protected stateSubject: StateSubject<State>) {}

  attachObserver(observer: Observer) {
    this.stateSubject.attach(observer);
  }

  getModel(modelKey: keyof State): State[keyof State] {
    return this.stateSubject.getState(modelKey);
  }
}
