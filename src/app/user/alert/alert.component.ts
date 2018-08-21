import { Component, OnInit } from '@angular/core';
import { Commands } from '../../domain/commands';
import { AlertService } from '../../services/alertService';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  providers: [AlertService]
})
export class AlertComponent implements OnInit {

  data: Commands[];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getData().then(res => {
      this.data = res.reverse();
    });
   }

}
