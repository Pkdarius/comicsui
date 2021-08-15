import {Component, Input, OnInit} from '@angular/core';
import {NavbarZone} from "../sidebar";

@Component({
  selector: 'app-sidebar-zone',
  templateUrl: './sidebar-zone.component.html',
  styleUrls: ['./sidebar-zone.component.css']
})
export class SidebarZoneComponent implements OnInit {
  @Input() data?: NavbarZone;

  constructor() {
  }

  ngOnInit(): void {
  }
}
