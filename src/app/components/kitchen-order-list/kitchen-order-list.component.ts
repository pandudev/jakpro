import { ToastrService } from 'ngx-toastr';
import { order } from './../../data/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen-order-list',
  templateUrl: './kitchen-order-list.component.html',
  styleUrls: ['./kitchen-order-list.component.scss']
})
export class KitchenOrderListComponent implements OnInit {
  data: any[] = [];
  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    order.forEach((x) => {
      if (x.products.every((y) => y.status.includes('Served'))) {
      } else {
        this.data.push(x);
      }
    });
  }

  process(data, product) {
    if (confirm('Are you sure?')) {
      if (product.status === 'Waiting') {
        product.status = 'On Progress';
      } else if (product.status === 'On Progress') {
        product.status = 'Ready to Serve';
      }

      this.data.forEach((x) => {
        const productz = x.products;
        const done = productz.every((z) => z.status.includes('Served'));
        console.log(done);
        if (done) {
          this.data = order.filter((z) => z.id !== x.id);
          this.toastr.success('Order completed on ' + x.zone + ' ' + x.table);
        }
      });
    }
  }
}
