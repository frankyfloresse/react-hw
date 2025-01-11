import {ICart} from "./ICart.ts";

export interface ICartResponse  {
  carts: ICart[];
  total: number;
  skip: number;
  limit: number;
}