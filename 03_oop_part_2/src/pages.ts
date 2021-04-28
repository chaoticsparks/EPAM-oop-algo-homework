import { Page } from './page';


export class Pages {
    constructor(private pages: Page[] = []) {}

    get length() {
        return this.pages.length;
    }

    getBookByIndex(index: number) {
        return this.pages[ index ];
    }
}
