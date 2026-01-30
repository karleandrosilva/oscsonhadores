import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  sidebarOpen = false;

  showSidebar() {
    this.sidebarOpen = true;
  }

  hideSidebar() {
    this.sidebarOpen = false;
  }

}
