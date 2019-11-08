import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.scss']
})
export class InventoryFormComponent implements OnInit {
  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit() {}

  submit() {
    if (confirm('Are you sure?')) {
      this.toastr.success('Raw of Material Saved');
      this.router.navigateByUrl('/inventory');
    }
  }

  cancel() {
    if (confirm('Are you sure?')) {
      this.router.navigateByUrl('/inventory');
    }
  }
}
