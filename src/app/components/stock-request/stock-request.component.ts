import { stockRequest } from './../../data/stock-request';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stock-request',
  templateUrl: './stock-request.component.html',
  styleUrls: ['./stock-request.component.scss']
})
export class StockRequestComponent implements OnInit {
  data: any[] = [];
  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.data = stockRequest;
  }

  accept() {
    if (confirm('Are you sure?')) {
      this.toastr.success('Request Accepted');
    }
  }
}
