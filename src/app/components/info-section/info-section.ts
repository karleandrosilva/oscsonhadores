import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info-section',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './info-section.html',
  styleUrl: './info-section.scss',
})
export class InfoSection {

  // começa vazio (para no html colocar o que quiser) 

  @Input("info-imagem") imagem = "";
  @Input() largura : number = 0;
  @Input() altura : number = 0;
  @Input() alt = "";

  @Input("info-imagem2") imagem2 = "";
  @Input() largura2 : number = 0;
  @Input() altura2 : number = 0;
  @Input() alt2 = "";

  @Input("info-titulo") titulo = "";
  @Input("info-texto") texto = "";

}
