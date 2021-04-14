import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  newCar:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  addCar(mouseEvent: MouseEvent) {
    this.newCar = true;
  }

  cancel() {
    this.newCar = false;
  }
}
