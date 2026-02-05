import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SobreNos } from './pages/sobre-nos/sobre-nos';
import { Projetos } from './pages/projetos/projetos';
import { Doacao } from './pages/doacao/doacao';
import { Voluntario } from './pages/voluntario/voluntario';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'sobre-nos', component: SobreNos},
    { path: 'projetos', component: Projetos},
    { path: 'doacao', component: Doacao},
    { path: 'voluntario', component: Voluntario}
];

// { path: '', component: },