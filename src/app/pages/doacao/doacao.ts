import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-doacao',
  imports: [Header, Footer],
  templateUrl: './doacao.html',
  styleUrl: './doacao.scss',
})
export class Doacao {

}
