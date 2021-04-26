import { Pages } from './pages';


type Pageable = new (...args: any[]) => { pages: Pages; };

export function PagesIterableMixin<TBase extends Pageable>(Base: TBase) {
    abstract class PagesIterableMixinClass extends Base {

        _nextIndex = 0;

        next() {
            return this._nextIndex < this.pages.length ? {
                value: `${this.toString()}, ${this.pages.getBookByIndex(this._nextIndex++)
                    .toString()}`,
                done: false,
            } : {
                value: [],
                done: true,
            };
        }

        [ Symbol.iterator ]() {
            return this;
        }
    }

    return PagesIterableMixinClass;
}
