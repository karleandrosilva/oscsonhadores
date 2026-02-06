import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-projetos',
  imports: [Header, Footer],
  templateUrl: './projetos.html',
  styleUrl: './projetos.scss',
})
export class Projetos {

}
