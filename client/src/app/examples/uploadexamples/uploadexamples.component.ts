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

  shortLink: string = ''; // Variable to store shortLink from api response
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file to Upload

  ngOnInit(): void {}

  onChange(event) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  upload(): void {
    if (this.file) {
      this.loading = !this.loading;
      console.log(this.file);
      let payload;
      this.uploadService.upload(this.file).subscribe((event: any) => {
        if (typeof event === 'object') {
          this.shortLink = event.link;
          this.loading = false;
        }
      });
    }
  }

  // selectedFiles?: FileList;
  // currentFile?: File;
  // progress = 0;
  // message = '';
  // fileInfos?: Observable<any>;
  // ngOnInit(): void {
  // this.fileInfos = this.uploadService.getFiles();
  // }
  // selectFile(event: any): void {
  //   this.selectedFiles = event.target.files;
  // }
  // upload(): void {
  // this.progress = 0;
  // if (this.selectedFiles) {
  //   const file: File | null = this.selectedFiles.item(0);
  //   if (file) {
  //     this.currentFile = file;
  //     console.log(this.currentFile);
  //     this.uploadService.upload(this.currentFile).subscribe({
  //       next: (event: any) => {
  //         if (event.type === HttpEventType.UploadProgress) {
  //           this.progress = Math.round(100 * event.loaded / event.total);
  //         } else if (event instanceof HttpResponse) {
  //           this.message = event.body.message;
  //           this.fileInfos = this.uploadService.getFiles();
  //         }
  //       },
  //       error: (err: any) => {
  //         console.log(err);
  //         this.progress = 0;
  //         if (err.error && err.error.message) {
  //           this.message = err.error.message;
  //         } else {
  //           this.message = 'Could not upload the file!';
  //         }
  //         this.currentFile = undefined;
  //       }
  //     });
  //   }
  //   this.selectedFiles = undefined;
  // }
  // }
}
