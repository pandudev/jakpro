import { Router } from '@angular/router';
import { goods } from './../../data/goods';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-raw-form',
  templateUrl: './product-raw-form.component.html',
  styleUrls: ['./product-raw-form.component.scss']
})
export class ProductRawFormComponent implements OnInit {
  data: any[] = [];
  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    this.data = goods;
  }

  submit() {
    if (confirm('Are you sure?')) {
      this.toastr.success('Product Saved');
      this.router.navigateByUrl('/product-form');
    }
  }

  cancel() {
    if (confirm('Are you sure?')) {
      this.router.navigateByUrl('/product-form');
    }
  }
}
