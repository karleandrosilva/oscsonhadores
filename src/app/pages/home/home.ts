import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from '../../components/footer/footer';
import { NgOptimizedImage } from '@angular/common';
import { InfoSection } from '../../components/info-section/info-section';
import { NumbersSection } from '../../components/numbers-section/numbers-section';

@Component({
  selector: 'app-home',
  imports: [Navbar, InfoSection, NumbersSection, Footer, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
