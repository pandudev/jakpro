import { ToastrService } from 'ngx-toastr';
import { zone } from './../../data/zone';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {
  data: any[] = [];
  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.data = zone;
  }

  delete() {
    if (confirm('Are you sure?')) {
      this.toastr.success('Zone Deleted');
    }
  }
}
