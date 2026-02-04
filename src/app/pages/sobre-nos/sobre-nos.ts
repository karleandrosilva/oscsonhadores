import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { Header } from '../../components/header/header';
import { InfoSection } from '../../components/info-section/info-section';

@Component({
  selector: 'app-sobre-nos',
  imports: [Footer, InfoSection, Header],
  templateUrl: './sobre-nos.html',
  styleUrl: './sobre-nos.scss',
})
export class SobreNos {

}
