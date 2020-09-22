import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextsComponent } from './features/text-report/texts/texts.component';

const routes: Routes = [ { path: 'texts', component: TextsComponent, pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
