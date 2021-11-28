import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CartModalService, Product } from './cart-modal.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  products: Product[];
  amount = 0;

  constructor(private cartModalService: CartModalService, private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
    this.products = this.cartModalService.getProducts();
    this.amount = this.cartModalService.takeAmount();
  }

  onClose() {
    this.modalCtrl.dismiss();
  }

  onClick() {
    this.router.navigate(['request']);
    this.modalCtrl.dismiss();
  }

  onRemove(product: Product) {
    this.cartModalService.removeProduct(product);
    this.ngOnInit();
  }

}
