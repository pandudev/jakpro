import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-zone-form',
  templateUrl: './zone-form.component.html',
  styleUrls: ['./zone-form.component.scss']
})
export class ZoneFormComponent implements OnInit {
  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit() {}

  submit() {
    if (confirm('Are you sure?')) {
      this.toastr.success('zone Saved');
      this.router.navigateByUrl('/zone');
    }
  }

  cancel() {
    if (confirm('Are you sure?')) {
      this.router.navigateByUrl('/zone');
    }
  }
}
