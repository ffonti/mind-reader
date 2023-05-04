import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NumberService } from 'src/app/services/number.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  input: number = 0;
  msg: string = '';

  constructor(private router: Router, private numberService: NumberService) {}

  numberSelected(): void {
    if (this.input < 1 || this.input > 10) {
      this.msg = 'Error! the number must be between 1 and 10';
    } else {
      this.msg = '';
      this.numberService.number = this.input;
      this.router.navigateByUrl('/result');
    }
  }
}
