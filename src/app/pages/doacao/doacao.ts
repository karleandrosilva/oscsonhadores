import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-doacao',
  imports: [Header, NgOptimizedImage, Footer],
  templateUrl: './doacao.html',
  styleUrl: './doacao.scss',
})
export class Doacao {

  chavePix = '04.872.141/0001-55';

  copiarPix(): void {
    navigator.clipboard.writeText(this.chavePix)
      .then(() => alert('Chave Pix copiada!'))
      .catch(() => alert('Erro ao copiar'));
  }

}
