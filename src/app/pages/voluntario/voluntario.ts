import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Doacao } from '../doacao/doacao';
import { ParallaxSection } from '../../components/parallax-section/parallax-section';

@Component({
  selector: 'app-voluntario',
  imports: [Header, ParallaxSection,Footer],
  templateUrl: './voluntario.html',
  styleUrl: './voluntario.scss',
})
export class Voluntario {

}
