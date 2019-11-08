import { products } from './../../data/product';

import { Component, OnInit } from '@angular/core';
import { order } from '../../data/order';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cash-in',
  templateUrl: './cash-in.component.html',
  styleUrls: ['./cash-in.component.scss']
})
export class CashInComponent implements OnInit {
  order: any[] = [];
  selected: any;
  products: any[] = [];
  total: number;
  selectedId: number;
  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.order = order.filter((s) => s.isDone === false);
  }

  process(e) {
    this.total = 0;
    console.log(e);
    this.selected = e;
    this.selectedId = e.id;
    this.products = this.selected.products;
    this.products.forEach((x) => {
      this.total = this.total + x.price * x.quantity;
    });
  }

  submit() {
    if (confirm('Are you sure?')) {
      this.toastr.success('Payment Success');
      this.selected = null;
      this.products = [];
      this.total = 0;
      this.selectedId = 0;
    }
  }

  cancel() {
    if (confirm('Are you sure?')) {
      this.selected = null;
      this.selectedId = 0;
      this.products = [];
      this.total = 0;
    }
  }
}
