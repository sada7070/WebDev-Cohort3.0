import { atom, selector } from "recoil";

export const counterAtom = atom({
  default: 0,
  key: "counter",
});

// creating selector - A selector represents a piece of derived state
export const evenSelector = selector({
  key: "isEvenSelector",
  get: function({get}) {
    const currentCount =  get(counterAtom);
    const isEven = (currentCount % 2 == 0);
    return isEven;
  }
})