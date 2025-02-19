import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsNew, productsNew } from '../model/productsNew';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-productNew-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productNew-details.component.html',
  styleUrls: ['./productNew-details.component.css']
})
export class ProductNewDetailsComponent implements OnInit {
  productNew: ProductsNew | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(productNew: ProductsNew) {
    this.cartService.addToCart(productNew);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.productNew = productsNew.find(productNew => productNew.product_id === productIdFromRoute);
  }
}

