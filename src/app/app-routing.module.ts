import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  { path: 'homePage', component: FormComponent },
  { path: 'result', component: ResultComponent },
  { path: '', redirectTo: 'homePage', pathMatch: 'full' }, //Default route
  { path: '**', component: PageNotFoundComponent }, //Errore, pagina non trovata
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
