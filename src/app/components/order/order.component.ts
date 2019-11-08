import { products } from './../../data/product';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderComponent implements OnInit {
  data = [];
  type = [];
  orderedData = [];
  option = [];
  tableId: string;

  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.data = products.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );

    this.tableId = 'Zona 1 Table 2';

    this.data.forEach((x) => {
      if (this.option.includes(x.type) === false) {
        this.option.push(x.type);
      }
    });
  }

  order(item) {
    if (this.orderedData.filter((x) => x.id === item.id).length === 0) {
      item.quantity = 1;
      this.orderedData.push(item);
    } else {
      this.orderedData.filter((x) => x.id === item.id)[0].quantity += 1;
    }
  }

  sub(item) {
    if (item.quantity > 1) {
      this.orderedData.filter((x) => x.id === item.id)[0].quantity -= 1;
    } else {
      this.orderedData = this.orderedData.filter((x) => x.id !== item.id);
    }
  }

  scan() {}

  submit() {
    if (confirm('Are you sure?')) {
      this.toastr.success('Order saved');
      this.orderedData.length = 0;
    }
  }

  cancel() {
    if (confirm('Are you sure?')) {
      this.orderedData.length = 0;
    }
  }

  filter(data) {
    if (data === 'all') {
      this.data = products.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
    } else {
      this.data = products
        .filter((x) => x.type === data)
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    }
  }
}
