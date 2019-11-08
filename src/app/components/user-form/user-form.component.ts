import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit() {}

  submit() {
    if (confirm('Are you sure?')) {
      this.toastr.success('User Saved');
      this.router.navigateByUrl('/user');
    }
  }

  cancel() {
    if (confirm('Are you sure?')) {
      this.router.navigateByUrl('/user');
    }
  }
}
