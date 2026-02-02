import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SobreNos } from './pages/sobre-nos/sobre-nos';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'sobre-nos', component: SobreNos}
];
