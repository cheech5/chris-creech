import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-hit-my-line-form',
  templateUrl: './hit-my-line-form.component.html',
  styleUrls: ['./hit-my-line-form.component.scss']
})
export class HitMyLineFormComponent implements OnInit {
  hitMyLineFormModal = new FormControl('', Validators.required);
  hitMyLineFormModalEmail = new FormControl('', Validators.email);
  hitMyLineFormModalSubject = new FormControl('', Validators.required);
  hitMyLineFormModalMessage = new FormControl('', Validators.required);
  constructor() { }

  ngOnInit() {
  }

}
