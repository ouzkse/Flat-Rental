import { Component } from '@angular/core';
import { KeyValuePair } from "../../models/common/KeyValuePair";
import {ImageFileDataService} from "../../services/data/image/image.data.service";

@Component({
  selector: 'app-image-uploader',
  templateUrl: './imageuploader.component.html',
  styleUrls: ['imageuploader.component.css']
})
export class ImageUploaderComponent {
  selectedFiles: KeyValuePair[] = [];
  selectedFileUrlList: KeyValuePair[] = [];
  keyInt = 0;

  constructor(private imageFileDataService: ImageFileDataService) { }

  onSelectButtonClick() {
    const element: HTMLElement = document.getElementById('uploader') as HTMLElement;
    element.click();
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFiles.push({key: this.keyInt, value: event.target.files[0]});
    console.log(this.selectedFiles.length);
    this.imageFileDataService.setImageFiles(this.selectedFiles)
    this.readUrl(event);
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        const imageUrl = reader.result;
        this.selectedFileUrlList.push({key: this.keyInt, value: imageUrl.toString()});
        this.keyInt++;
        console.log('Hey hey');
        console.log(this.selectedFileUrlList.length);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onUpload() {}

  onRemoveButtonClick(item: KeyValuePair) {
    console.log(item);
    const position = this.selectedFileUrlList.findIndex((value, index) => item);
    this.selectedFileUrlList.splice(position, 1);
    this.selectedFiles.splice(position, 1);
  }
}
