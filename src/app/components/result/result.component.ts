import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberService } from 'src/app/services/number.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  number: number = 0;
  loadingDone: boolean = false;

  ngOnInit(): void {
    this.number = this.numberService.number;
    if (this.number < 1 || this.number > 10) {
      this.router.navigateByUrl('/homePage');
    } else {
      setTimeout(() => {
        this.loadingDone = true;
      }, 6000);
    }
  }

  constructor(private router: Router, private numberService: NumberService) {}
}
