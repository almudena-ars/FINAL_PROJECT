import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-admin-item-two',
  templateUrl: './admin-item-two.component.html',
  styleUrls: ['./admin-item-two.component.css']
})
export class AdminItemTwoComponent implements OnInit {

  @Input('product')
  product!: Product;

  @Input('index')
  index!: number;

  @Output()
  addProductEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(): void{
    this.addProductEvent.emit();
  }

}
