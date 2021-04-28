import { Item } from './item';
import { Pages } from './pages';
import { PagesIterableMixin } from './pages-iterable.mixin';


class _Book extends Item {
    constructor(private title: string, private author: string, public pages: Pages) {super();}

    toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.length}`;
    }
}

export const Book = PagesIterableMixin(_Book);
