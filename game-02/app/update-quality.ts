import { Item } from './gilded-rose';

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

const isLessThanMax = (quality: number): boolean => quality < MAX_QUALITY;
const isOverMin = (quality: number): boolean => quality > MIN_QUALITY;

const increaseQuality = (quality: number): number => isLessThanMax(quality) ? quality + 1 : quality;
const decreaseQuality = (quality: number): number => isOverMin(quality) ? quality - 1 : quality;
const decreaseSellIn = (sellIn: number): number => sellIn > 0 ? sellIn - 1 : sellIn;


export const updateQualityForAgeBrie = (item: Item): Item => {
    item.quality = increaseQuality(item.quality);
    item.quality = item.sellIn < 0 ? increaseQuality(item.quality) : item.quality;
    item.sellIn = decreaseSellIn(item.sellIn);

    return item;
}

const increaseQualityForConcert = (item: Item): number => {
    let quality = increaseQuality(item.quality);
    quality = item.sellIn <= 10 ? increaseQuality(item.quality) : quality;
    quality = item.sellIn <= 5 ? increaseQuality(item.quality) : quality;
    
    return quality;
}

export const updateQualityForConcert = (item: Item): Item => {
    item.quality = item.sellIn > 0 ? increaseQualityForConcert(item) : 0;
    item.sellIn = decreaseSellIn(item.sellIn);
    
    return item;
}

export const updateQualityForSulfuras = (item: Item): Item => {
    item.quality = 80;
    
    return item;
}

const updateConjuredQuality = (item: Item): Item => {
    item = updateQualityItem(item);
    item = updateQualityItem(item);

    return item;
}

export const updateQualityForConjured = (item: Item): Item => {
    item = updateConjuredQuality(item);  
    item.sellIn = decreaseSellIn(item.sellIn);

    return item;
}

const updateQualityItem = (item: Item): Item => {
    item.quality = decreaseQuality(item.quality);
    item.quality = item.sellIn <= 0 ? decreaseQuality(item.quality) : item.quality;

    return item;
}

export const updateQualityForItem = (item: Item): Item => {
    item = updateQualityItem(item);
    item.sellIn = decreaseSellIn(item.sellIn);

    return item;
}