import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-sobre-nos',
  imports: [Footer, Header],
  templateUrl: './sobre-nos.html',
  styleUrl: './sobre-nos.scss',
})
export class SobreNos {

}
