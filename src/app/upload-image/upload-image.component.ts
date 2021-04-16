import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  @Output() imgFile = new EventEmitter();
  selectedFiles: FileList;
  urls: ArrayBuffer | string;
  imgTitle: string;
  constructor() { }

  ngOnInit(): void {
  }

  onFileChanged(event) {
    this.selectedFiles = event.target.files;
    // TODO : validation
    let reader = new FileReader();
    if(event.target.files.length > 0) {
      for(const file of event.target.files) {

        if (!file.type.startsWith('image/')) { 
          alert('이미지 파일만 업로드 가능합니다.');
          continue;
        }

        const filesize = ((file.size/1024)/1024).toFixed(4); // MB
        if (Number(filesize) > 5) {
          alert('파일 사이즈가 5MB보다 큽니다.');
          continue;
        }

        reader.readAsDataURL(file);
        reader.onload = () => {
          this.urls = reader.result ; 
          this.imgTitle = file.name;

          this.imgFile.emit(file)
        };
      }
    } else {
      console.log('no file')
    }
  }

  deleteImg(event:MouseEvent) {
    this.urls = null;
    this.imgTitle = null;
  }
}
