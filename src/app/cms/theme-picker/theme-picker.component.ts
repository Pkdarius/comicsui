import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.css']
})
export class ThemePickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme() {
    const body = document.querySelector('body') as HTMLElement;
    if (body.classList.contains('sidebar-compact')) {
      document.querySelectorAll('.sidebar .dropdown').forEach(dropDown => {
        dropDown.classList.remove('show');
        dropDown.querySelectorAll('dropdown-toggle').forEach(dropDownToggle => {
          // dropDownToggle.nextElementSibling.
        })
      })
    }
    if ($('body').hasClass('sidebar-compact') == true) {
      $('.sidebar').find('.dropdown').removeClass('show').find('.dropdown-toggle').next().hide();
    }
  }

}
