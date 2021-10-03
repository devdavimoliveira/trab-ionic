import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/products.service';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.page.html',
  styleUrls: ['./products-details.page.scss'],
})
export class ProductsDetailsPage implements OnInit {

  slug: string;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get(':slug');
  }

}
