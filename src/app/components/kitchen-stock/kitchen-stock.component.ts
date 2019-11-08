import { goods } from './../../data/goods';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen-stock',
  templateUrl: './kitchen-stock.component.html',
  styleUrls: ['./kitchen-stock.component.scss']
})
export class KitchenStockComponent implements OnInit {
  data: any[] = [];

  constructor() {}

  ngOnInit() {
    this.data = goods.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
  }
}
