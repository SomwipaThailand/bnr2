import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {


  selectedCar3: any;

  constructor() { }

  ngOnInit() { }


  onRowSelect(event) {
    // this.messageService.add({ severity: 'info', summary: 'Car Selected', detail: 'Vin: ' + event.data.vin });
  }

  onRowUnselect(event) {
    // this.messageService.add({ severity: 'info', summary: 'Car Unselected', detail: 'Vin: ' + event.data.vin });
  }

}
