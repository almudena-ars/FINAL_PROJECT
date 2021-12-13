import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input('cart')
  cart!: Cart;

  @Input('index')
  index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
