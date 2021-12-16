import { Component, Input, OnInit } from '@angular/core';
import { ProductAdmin } from '../model/product-admin';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.css']
})
export class AdminItemComponent implements OnInit {


  @Input('productAdmin')
  productAdmin!: ProductAdmin;

  @Input('index')
  index!: number;



  constructor() { }

  ngOnInit(): void {
  }

}
