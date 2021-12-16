import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  // @Input('cart')
  // cart!: Cart;

  @Input('product')
  product!: Product;

  @Input('index')
  index!: number;

  @Output()
  deleteProductEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

 deleteProduct(){
  this.deleteProductEvent.emit()
 }

}
