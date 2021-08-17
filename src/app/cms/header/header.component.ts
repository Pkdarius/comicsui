import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleSideMenu(event: MouseEvent) {
    event.stopPropagation();
    const body = document.querySelector('body') as HTMLElement;
    if (body.classList.contains('sidemenu-open')) {
      body.classList.remove('sidemenu-open');
    } else {
      body.classList.add('sidemenu-open');
    }
  }
}
