import { goods } from './../../data/goods';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inventory-transaction-form',
  templateUrl: './inventory-transaction-form.component.html',
  styleUrls: ['./inventory-transaction-form.component.scss']
})
export class InventoryTransactionFormComponent implements OnInit {
  constructor(private router: Router, private toastr: ToastrService) {}

  option: any[] = [];
  ngOnInit() {
    this.option = goods;
  }

  submit() {
    if (confirm('Are you sure?')) {
      this.toastr.success('Transaction Saved');
      this.router.navigateByUrl('/inventory');
    }
  }

  cancel() {
    if (confirm('Are you sure?')) {
      this.router.navigateByUrl('/inventory');
    }
  }
}
