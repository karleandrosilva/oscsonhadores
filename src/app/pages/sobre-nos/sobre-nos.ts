import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-sobre-nos',
  imports: [Footer, Navbar],
  templateUrl: './sobre-nos.html',
  styleUrl: './sobre-nos.scss',
})
export class SobreNos {

}
