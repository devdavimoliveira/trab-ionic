import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/products.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequestPageForm } from './request.page.form';
@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  public slug: string;
  form: FormGroup;
  product;

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.product = this.productsService.getProductBySlug(this.slug);
    this.form = new RequestPageForm(this.formBuilder).createForm();
  }

}
