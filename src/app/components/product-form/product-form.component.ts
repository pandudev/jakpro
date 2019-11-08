import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit() {}

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

  delete() {
    if (confirm('Are you sure?')) {
      this.toastr.success('RAW Deleted');
    }
  }
}
