import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [{
      id: 1,
      title: 'Bolo de cenoura',
      slug: 'bolo-de-cenoura',
      price: 10,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgUrl: 'https://media.istockphoto.com/photos/carrot-cake-with-chocolate-icing-brazilian-cake-picture-id1313708566?s=612x612'
    },
    {
      id: 2,
      title: 'Bolo gelado',
      slug: 'bolo-gelado',
      price: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgUrl: 'https://img.itdg.com.br/tdg/images/recipes/000/002/313/325143/325143_original.jpg?mode=crop&width=160&height=220'
    },
    {
      id: 3,
      title: 'Bolo mousse de nutella',
      slug: 'bolo-mousse-de-nutella',
      price: 18,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgUrl: 'https://img.itdg.com.br/tdg/images/recipes/000/301/650/323489/323489_original.jpg?mode=crop&width=160&height=220'
    },
    {
      id: 4,
      title: 'Bolo de banana e aveia',
      slug: 'bolo-de-banana-e-aveia',
      price: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgUrl: 'https://img.itdg.com.br/tdg/images/recipes/000/100/781/34627/34627_original.jpg?mode=crop&width=160&height=220'
    },
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProductBySlug(slug: string) {
    return this.products.find(product => product.slug === slug);
  }
}
