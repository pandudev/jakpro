import { products } from './../../data/product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  data = [];
  type = [];
  scanEnable: boolean = false;

  @ViewChild('scanner', { static: false })
  scanner: ZXingScannerComponent;

  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.data = products.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
  }

  order(id) {
    console.log(id);
  }

  startScan() {
    this.scanEnable = true;
  }

  scanSuccessHandler(event) {
    this.toastr.info(event);
    this.scanEnable = false;
  }
  scanErrorHandler(event) {
    this.toastr.info(event);
    this.scanEnable = false;
  }
  scanFailureHandler(event) {
    this.toastr.info(event);
    this.scanEnable = false;
  }
  scanCompleteHandler(event) {
    this.toastr.info(event);
    this.scanEnable = false;
  }
}
