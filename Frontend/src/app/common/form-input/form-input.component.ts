import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  providers: [MatInputModule, MatFormFieldModule]
})

export class FormInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
