import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {MainNavigationEnum} from '../../../models/navigationcontrol/MainNavigationEnum';

@Injectable({
  providedIn: 'root'
})
export class MainNavigationService {

  // tslint:disable-next-line:variable-name
  private _event = new Subject<MainNavigationEnum>();
  event = this._event.asObservable();

  constructor() {
  }

  setEvent(eventValue: MainNavigationEnum = MainNavigationEnum.dashboard) {
    this._event.next(eventValue);
  }
}
