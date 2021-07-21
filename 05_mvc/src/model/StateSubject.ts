/**
 * The Subject interface declares a set of methods for managing subscribers.
 */
export interface Subject {
  // Attach an observer to the subject.
  attach(observer: Observer): void;

  // Detach an observer from the subject.
  detach(observer: Observer): void;

  // Notify all observers about an event.
  notify(): void;
}


/**
 * The Observer interface declares the update method, used by subjects.
 */
export interface Observer {
  // Receive update from subject.
  update(subject: Subject): void;
}

export class StateSubject<State> implements Subject {
  private observers: Observer[] = [];
  private state: {[Key in keyof State]: State[Key]};

  constructor(initialState: State) {
    this.state = {...initialState};
  }

  updateState(stateKey: keyof State, value: Partial<State[keyof State]>) {
    this.state[stateKey] = {
      ...this.state[stateKey],
      ...value
    }
    this.notify();
  }

  setState(newState: State) {
    this.state = {...newState}
  }

  getState(): State;
  getState(stateKey: keyof State): State[keyof State];
  getState(stateKey?: keyof State): State[keyof State] | State {
    if (stateKey) {
      return this.state[stateKey];
    }
    return this.state;
  }

  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('Subject: Observer has been attached already.');
    }

    console.log('Subject: Attached an observer.');
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.');
    }

    this.observers.splice(observerIndex, 1);
    console.log('Subject: Detached an observer.');
  }


  public notify(): void {
    console.log('Subject: Notifying observers...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}
