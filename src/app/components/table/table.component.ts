import { table } from './../../data/table';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: any[] = [];
  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.data = table;
  }

  delete() {
    if (confirm('Are you sure?')) {
      this.toastr.success('Table Deleted');
    }
  }
}
