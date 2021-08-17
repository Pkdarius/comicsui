import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  body = document.querySelector('body') as HTMLElement;
  title = 'Comics.UI';

  ngOnInit() {
    if (this.body.clientWidth <= 992) {
      this.body.classList.remove('sidemenu-open');
    }
  }

  hideSideMenu(event: MouseEvent) {
    event.stopPropagation();
    this.body.classList.remove('sidemenu-open');
  }
}
