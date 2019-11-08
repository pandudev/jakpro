import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { goods } from './../../data/goods';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen-stock-form',
  templateUrl: './kitchen-stock-form.component.html',
  styleUrls: ['./kitchen-stock-form.component.scss']
})
export class KitchenStockFormComponent implements OnInit {
  option: any[] = [];
  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    this.option = goods;
  }

  submit() {
    if (confirm('Are you sure?')) {
      this.toastr.success('Request Success');
      this.router.navigateByUrl('/kitchen-stock');
    }
  }

  cancel() {
    if (confirm('Are you sure?')) {
      this.router.navigateByUrl('/kitchen-stock');
    }
  }
}
