import { Component, OnInit } from '@angular/core';
import { Alert } from '../../domain/alert';
import { AlertService } from '../../services/alertService';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  providers: [AlertService]
})
export class AlertComponent implements OnInit {

  data: Alert[];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getData().then(res => {
      this.data = res.reverse();
      console.log(this.data);
    });
   }

}
