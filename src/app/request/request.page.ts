import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequestPageForm } from './request.page.form';
import { AlertController } from '@ionic/angular';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  public slug: string;
  form: FormGroup;
  product;

  constructor(private route: ActivatedRoute, private http: HttpClient, private formBuilder: FormBuilder,
    public alertController: AlertController, private router: Router) { }

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
    this.http.get(`http://localhost:3000/cakes/cakeBySlug/${this.slug}`).subscribe(data => {
      this.product = data;
    });
    this.form = new RequestPageForm(this.formBuilder).createForm();
  }

}
