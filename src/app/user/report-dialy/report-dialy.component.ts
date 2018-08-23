import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Commands } from '../../domain/commands';
import { ReportdialyService } from '../../services/reportdialyService';

@Component({
  selector: 'app-report-dialy',
  templateUrl: './report-dialy.component.html',
  styleUrls: ['./report-dialy.component.scss'],
  providers: [ReportdialyService]
})
export class ReportDialyComponent implements OnInit {

  data: Commands[];

  constructor(private reportdialyService: ReportdialyService) { }

  ngOnInit() {
    this.reportdialyService.getData().then(res => {
      this.data = res.reverse();
    });
  }

}
