import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadService } from './upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-uploadexamples',
  templateUrl: './uploadexamples.component.html',
  styleUrls: ['./uploadexamples.component.scss'],
})
export class UploadexamplesComponent implements OnInit {
  constructor(public uploadService: UploadService) {}

  ngOnInit(): void {}

  name = 'Angular';
  fileToUpload: any;
  imageUrl: any;
  handleFileInput(file) {
    this.fileToUpload = file.target.files.item(0);
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      this.uploadService.upload(this.imageUrl).subscribe((res) => {
      });
    };
    reader.readAsDataURL(this.fileToUpload);
  }
}
