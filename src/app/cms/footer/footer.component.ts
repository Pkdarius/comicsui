import {Component, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private host: ElementRef) { }

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    const footer = this.host.nativeElement;
    if (footer.children.length > 0) {
      const footerElement = footer.children[0];
      const footerHeight = footerElement.offsetHeight;
      footerElement.style.marginTop = -footerHeight + 'px';

      if (footer.previousSibling) {
        (footer.previousSibling as HTMLElement).style.paddingBottom = footerHeight + 'px';
      }
    }
  }
}
