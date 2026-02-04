import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Header } from '../../components/header/header';
import { InfoSection } from '../../components/info-section/info-section';
import { ParallaxSection } from "../../components/parallax-section/parallax-section";

@Component({
  selector: 'app-sobre-nos',
  imports: [Footer, InfoSection, ParallaxSection, Header],
  templateUrl: './sobre-nos.html',
  styleUrl: './sobre-nos.scss',
})
export class SobreNos {

}
