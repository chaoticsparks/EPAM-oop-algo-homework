import { Item } from './item';
import { Pages } from './pages';
import { PagesIterableMixin } from './pages-iterable.mixin';


class _Magazine extends Item {
    constructor(private title: string, public pages: Pages) {super();}

    toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages.length}`;
    }
}

export const Magazine = PagesIterableMixin(_Magazine);
