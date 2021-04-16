import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { BoardService } from 'src/app/board.service';
import { eFuel } from 'src/app/shared/enums';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.scss'],
})
export class BoardFormComponent implements OnInit {
  @Output() cancelAdd = new EventEmitter();
  @Output() submitForm = new EventEmitter();
  fuelList = [
    { value: eFuel.DIESEL, name: '디젤' },
    { value: eFuel.GASOLIN, name: '휘발유'},
    { value: eFuel.UNLEADED_GASOLIN, name: '무연 휘발유'},
    { value: eFuel.LIGHT_OIL, name: '경유'},
    { value: eFuel.LPG, name: 'LPG'}
  ];
  form: FormGroup = new FormGroup({
    image: new FormControl(),
    model: new FormControl(''),
    number: new FormControl(''),
    parking: new FormControl(''),
    engine: new FormControl(eFuel.LIGHT_OIL),
    quantity: new FormControl(),
    etc: new FormControl('')
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
  }

  onFileChanged(event) {
    this.selectedFiles = event.target.files;

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
    const formData = new FormData();
    formData.append('image', this.form.get('image').value);
    formData.append('model', this.form.get('model').value);
    formData.append('number', this.form.get('number').value);
    formData.append('parking', this.form.get('parking').value);
    formData.append('engine', this.form.get('engine').value);
    formData.append('quantity', this.form.get('quantity').value);
    formData.append('etc', this.form.get('etc').value);

    this.boardService.create(formData).subscribe((result) => {console.log(result)});
  }

  onImgUpload(file:File) {
    this.form.get('image').setValue(file);
  }
}
