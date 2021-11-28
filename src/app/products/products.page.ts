import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products;

  constructor(private http: HttpClient, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/cakes').subscribe(data => {
      this.products = data;
    });
  }

  async openCart() {
		const modal = await this.modalCtrl.create({
			component: CartModalPage,
			cssClass: 'cart-modal'
		});
		modal.present();
	}

}
