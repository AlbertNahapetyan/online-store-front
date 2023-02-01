import { atom } from 'recoil'

export const BasketItemsCount = atom({
  key: 'BasketItemsCountAtom',
  default: 0,
})

export const BasketItemsPrice = atom({
  key: 'BasketItemsPriceAtom',
  default: 0,
})

export const BasketItems = atom({
  key: 'BasketItemsAtom',
  default: {},
})

export const FavoriteItems = atom({
  key: 'FavoriteItemsAtom',
  default: {},
})
