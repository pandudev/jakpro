import { products } from './../../data/product';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  data = [];
  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.data = products.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
  }

  delete() {
    if (confirm('Are you sure?')) {
      this.toastr.success('Product Deleted');
    }
  }
}
