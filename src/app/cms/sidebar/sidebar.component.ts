import {Component, OnInit} from '@angular/core';
import {NavbarZone} from "./sidebar";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: NavbarZone[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<NavbarZone[]>('/assets/menu.json').subscribe(response => {
      this.menuItems = response;
    });
  }

}
