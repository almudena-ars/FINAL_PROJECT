import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../model/transaction.model';

@Component({
  selector: 'app-admin-transactions',
  templateUrl: './admin-transactions.component.html',
  styleUrls: ['./admin-transactions.component.css']
})
export class AdminTransactionsComponent implements OnInit {

  @Input('transaction')
  transaction!: Transaction;

  constructor() { }

  ngOnInit(): void {
  }

}
