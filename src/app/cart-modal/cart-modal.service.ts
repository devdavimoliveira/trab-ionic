import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  imgUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartModalService {

  constructor() { }

  addProducts(product: Product) {
    const data = JSON.parse(localStorage.getItem('cart'));
    const cart = [...data, product];
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  removeProduct(product: Product) {
    const data = JSON.parse(localStorage.getItem('cart'));
    const cart = Object.values(data).filter((item: Product) => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getProducts() {
    return Object.values<Product>(JSON.parse(localStorage.getItem('cart')));
  }

  takeAmount() {
    let amount = 0;
    const pdcts = this.getProducts();
    pdcts.forEach(product => amount += +product.price);
    return amount;
  }

}
