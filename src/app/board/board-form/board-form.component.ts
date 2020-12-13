import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BoardService } from 'src/app/board.service';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.css']
})
export class BoardFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    model: new FormControl(''),
    number: new FormControl(''),
    parking: new FormControl(''),
    fuelType: new FormControl(''),
    fuelQuantity: new FormControl('')
  });


  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.boardService.create(this.form);
  }

}
