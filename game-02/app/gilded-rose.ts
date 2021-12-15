import {
    updateQualityForAgeBrie,
    updateQualityForConcert,
    updateQualityForSulfuras,
    updateQualityForConjured,
    updateQualityForItem
} from './update-quality';
export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality(): Item[] {

        this.items.map((item: Item) => {

            switch (item.name) {
                case 'Aged Brie':
                    item = updateQualityForAgeBrie(item);
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    item = updateQualityForConcert(item);
                    break;
                case 'Sulfuras, Hand of Ragnaros':
                    item = updateQualityForSulfuras(item);
                    break;
                case 'Conjured':
                    item = updateQualityForConjured(item);
                    break;
                default:
                    item = updateQualityForItem(item);
            }
        });

        return this.items;
    }
}
