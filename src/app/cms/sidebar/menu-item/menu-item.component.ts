import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../sidebar";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  isCollapsed = false;
  @Input() data: Item = {
    title: '',
    href: '',
    icon: '',
    items: []
  };

  constructor() {
  }

  ngOnInit() {
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
