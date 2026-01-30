import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from '../../components/footer/footer';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
