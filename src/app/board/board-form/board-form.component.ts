import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { BoardService } from 'src/app/board.service';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.css'],
})
export class BoardFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    model: new FormControl(''),
    number: new FormControl(''),
    parking: new FormControl(''),
    fuelType: new FormControl(''),
    fuelQuantity: new FormControl(''),
  });

  // https://stackblitz.com/edit/ng2-file-upload-example?file=app%2Fapp.component.html
  constructor(private boardService: BoardService) {}

  ngOnInit(): void {}

  submit(): void {
    this.boardService.create(this.form);
  }

  public uploader: FileUploader = new FileUploader({
    url: 'http://localhost:8080',
    disableMultipart: false,
    autoUpload: true,
    method: 'post',
    itemAlias: 'attachment',
    allowedFileType: ['image', 'pdf'],
  });

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
    console.log(file);
  }
}
