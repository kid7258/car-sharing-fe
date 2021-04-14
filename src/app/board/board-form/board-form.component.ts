import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { BoardService } from 'src/app/board.service';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.scss'],
})
export class BoardFormComponent implements OnInit {
  @Output() cancelAdd = new EventEmitter();
  @Output() submitForm = new EventEmitter();
  form: FormGroup = new FormGroup({
    // image: new FormControl(),
    model: new FormControl(''),
    number: new FormControl(''),
    parking: new FormControl(''),
    fuelType: new FormControl(''),
    fuelQuantity: new FormControl(''),
  });

  selectedFiles: FileList;
  urls: (ArrayBuffer | string)[] = [];

  // https://stackblitz.com/edit/ng2-file-upload-example?file=app%2Fapp.component.html
  constructor(private boardService: BoardService) {}

  ngOnInit(): void {}

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

  onFileChanged(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles)

    let reader = new FileReader();
    if(event.target.files) {
      for(const file of event.target.files) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          console.log(reader.result)
          this.urls.push(reader.result); 
        };
      }
      console.log(this.urls)
    }
  }

  cancel() {
    this.cancelAdd.emit();
  }

  submit() {
    console.log(this.form)
    this.boardService.create(this.form.value).subscribe((result) => {console.log(result)});
  }
}
