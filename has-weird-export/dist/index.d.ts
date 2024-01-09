declare const Something: unique symbol;
declare class NotExported {
  [Something]: 'fancy';
}

export function getSomething(): NotExported;

export {}
