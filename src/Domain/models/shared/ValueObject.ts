import { isEqual } from "lodash";

export abstract class ValueObject<T, U> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  private _type: U;

  // 継承したclass内でも使える
  protected _value: T;

  constructor(value: T) {
    this.validate(value);
    this._value = value;
  }

  protected abstract validate(value: T): void;

  get value(): T {
    return this._value;
  }

  equals(other: ValueObject<T, U>): boolean {
    return isEqual(this._value, other._value);
  }
}
