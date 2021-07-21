export abstract class BaseView {
  protected readonly viewRoot: string;

  public constructor(viewRoot: string) {
    const element = document.querySelector(`[data-viewRoot=${viewRoot}]`);
    if (element === null) {
      throw new Error('Wrong selector for converter view');
    }
    this.viewRoot = viewRoot
  }

  protected getInputElement(name: string): HTMLInputElement {
    return this.getElement<HTMLInputElement>(name, 'input')
  }

  protected getHTMLElement(name: string): HTMLElement {
    return this.getElement<HTMLElement>(name, 'element')
  }

  private getElement<T extends Element>(name: string, type: string): T {
    const element = document.querySelector<T>(`[data-viewRoot=${this.viewRoot}] [data-${type}=${name}]`);
    if (!element) {
      throw new Error(`No element found in DOM with data-${type}=${name}`);
    }
    return element;
  }

  protected static setOnInputListener(input: HTMLInputElement, listener: () => void) {
    input.addEventListener('input', listener)
  }
}
