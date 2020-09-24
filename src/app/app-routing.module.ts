import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { ReportComponent } from './features/reports/report/report.component';
import { TextsComponent } from './features/text-report/texts/texts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'texts', component: TextsComponent, pathMatch: 'full' },
  { path: 'report', component: ReportComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '*', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
