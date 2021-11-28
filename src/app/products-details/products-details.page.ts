import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.page.html',
  styleUrls: ['./products-details.page.scss'],
})
export class ProductsDetailsPage implements OnInit {

  public slug: string;
  product;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.http.get(`http://localhost:3000/cakes/cakeBySlug/${this.slug}`).subscribe(data => {
      this.product = data;
    });
  }

  onClick() {
    this.router.navigate([`request/${this.slug}`]);
  }

}
