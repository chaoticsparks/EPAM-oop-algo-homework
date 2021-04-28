import { Item } from './item';
import { Pages } from './pages';
import { PagesIterableMixin } from './pages-iterable.mixin';


class _Comics extends Item {
    constructor(
        private title: string,
        private author: string,
        private artist: string,
        public pages: Pages,
    ) {super();}

    toString(): string {
        return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.length}`;
    }
}

export const Comics = PagesIterableMixin(_Comics);
