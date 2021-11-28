import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequestPageForm } from './request.page.form';
import { AlertController } from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import { CartModalService, Product } from '../cart-modal/cart-modal.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  public slug: string;
  form: FormGroup;
  products: Product[];
  amount = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient, private formBuilder: FormBuilder,
    public alertController: AlertController, private router: Router, private cartModalService: CartModalService) { }

    async submit() {
      const alert = await this.alertController.create({
        header: 'Pedido confirmado!',
        message: 'Daqui a pouco chega :)',
        buttons: [{text: 'OK', handler: () => this.router.navigate(['products'])}]
      });

      await alert.present();

    }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.products = this.cartModalService.getProducts();
    this.form = new RequestPageForm(this.formBuilder).createForm();
    this.amount = this.cartModalService.takeAmount();
  }

}
