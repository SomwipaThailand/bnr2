import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-first',
  templateUrl: './home-first.component.html',
  styleUrls: ['./home-first.component.scss']
})
export class HomeFirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(el) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}
