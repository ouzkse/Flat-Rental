import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {KeyValuePair} from "../../../models/common/KeyValuePair";

@Injectable({
  providedIn: 'root'
})
export class ImageFileDataService {

  private _imageFiles = new Subject<Array<KeyValuePair>>()
  imageFiles = this._imageFiles.asObservable()

  constructor() {
  }

  setImageFiles(event) {
    this._imageFiles.next(event)
  }
}
