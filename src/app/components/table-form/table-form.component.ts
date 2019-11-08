import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss']
})
export class TableFormComponent implements OnInit {
  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit() {}

  submit() {
    if (confirm('Are you sure?')) {
      this.toastr.success('Table Saved');
      this.router.navigateByUrl('/table');
    }
  }

  cancel() {
    if (confirm('Are you sure?')) {
      this.router.navigateByUrl('/table');
    }
  }
}
