import { ToastrService } from 'ngx-toastr';
import { products } from './../../data/product';
import { order } from './../../data/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  data: any[] = [];
  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    order.forEach((x) => {
      if (x.products.every((y) => y.status.includes('Served'))) {
      } else {
        this.data.push(x);
      }
    });

    // this.data = order;
  }

  served(data, product) {
    if (confirm('Are you sure?')) {
      const find = this.data
        .filter((x) => x.id === data.id)[0]
        .products.filter((y) => y.id === product.id)[0];
      find.status = 'Served';

      this.data.forEach((x) => {
        const productz = x.products;
        const done = productz.every((z) => z.status.includes('Served'));
        if (done) {
          this.toastr.success('Order completed on ' + x.zone + ' ' + x.table);
          this.data = order.filter((d) => d.id !== x.id);
        }
      });
    }
  }
}
