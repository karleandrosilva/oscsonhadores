import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [Navbar, NgOptimizedImage],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
