import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { CartModalService, Product } from '../cart-modal/cart-modal.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.page.html',
  styleUrls: ['./products-details.page.scss'],
})
export class ProductsDetailsPage implements OnInit {

  public slug: string;
  product: Product;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient,
     private cartModalService: CartModalService) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.http.get<Product>(`http://localhost:3000/cakes/cakeBySlug/${this.slug}`).subscribe(data => {
      this.product = data;
    });
  }

  /*onClick() {
    this.router.navigate([`request/${this.slug}`]);
  }*/

  async onClick() {
    await this.cartModalService.addProducts(this.product);
    this.router.navigate(['products']);
  }

}
