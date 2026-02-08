import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-parallax-section',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './parallax-section.html',
  styleUrl: './parallax-section.scss',
})
export class ParallaxSection {

}
