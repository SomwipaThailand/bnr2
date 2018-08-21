import { Component, OnInit } from '@angular/core';
import { Commands } from '../../domain/commands';
import { CommandsService } from '../../services/commandsService';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss'],
  providers: [CommandsService]
})
export class StructureComponent implements OnInit {

  data: Commands[];

  constructor(private commandsService: CommandsService) { }

  ngOnInit() {
    this.commandsService.getData().then(res => {
      this.data = res.reverse();
    });
  }

}
