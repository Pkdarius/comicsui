import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../service/local-storage.service";

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.css']
})
export class ThemePickerComponent implements OnInit {
  wrapperCorner: boolean = false;
  constructor(private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
    this.loadTheme();
  }

  loadTheme() {
    const body = document.querySelector('body') as HTMLElement;
    if (this.localStorage.get('wrappercorner')) {
      this.wrapperCorner = true;
      body.classList.add('wrappercorner');
    } else {
      this.wrapperCorner = false;
      body.classList.remove('wrappercorner');
    }


    const mainContainer = document.querySelector('#main-container') as HTMLElement;
    if (this.localStorage.get('contentWidth')) {
      this.wrapperCorner = true;
      mainContainer.classList.add('contentWidth');
    } else {
      this.wrapperCorner = false;
      mainContainer.classList.remove('contentWidth');
    }
  }

  changeTheme() {
    const body = document.querySelector('body') as HTMLElement;
    if (body.classList.contains('sidebar-compact')) {
      document.querySelectorAll('.sidebar .dropdown').forEach(dropDown => {
        dropDown.classList.remove('show');
        dropDown.querySelectorAll('.dropdown-toggle').forEach(dropDownToggle => {
          dropDownToggle.nextElementSibling?.classList.add('d-none');
        });
      });
    }
  }

}
