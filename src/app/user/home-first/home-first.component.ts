import { Component, OnInit } from '@angular/core';
import { Alert } from '../../domain/alert';
import { AlertService } from '../../services/alertService';

@Component({
  selector: 'app-home-first',
  templateUrl: './home-first.component.html',
  styleUrls: ['./home-first.component.scss'],
  providers: [AlertService]
})
export class HomeFirstComponent implements OnInit {

  data: Alert[];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getData().then(res => {
      this.data = res.reverse();
    });
  }

  scroll(el) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}
