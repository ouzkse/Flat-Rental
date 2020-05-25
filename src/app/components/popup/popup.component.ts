import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IgxToastPosition } from 'igniteui-angular';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent implements OnInit {
  public toastPosition: IgxToastPosition = IgxToastPosition.Bottom;

  constructor() {
  }

  public ngOnInit() {
  }

  public showToast(toast, position) {
    switch (position) {
      case 'middle':
        this.toastPosition = IgxToastPosition.Middle;
        break;
      case 'top':
        this.toastPosition = IgxToastPosition.Top;
        break;
      default:
        this.toastPosition = IgxToastPosition.Top;
    }

    toast.show();
  }
}
