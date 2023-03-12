import { DetailArticleComponent } from './pages/article/detail-article/detail-article.component';
import { IndexArticleComponent } from './pages/article/index-article/index-article.component';
import { AppsComponent } from './pages/apps/apps.component';

import { MainComponent } from './pages/main/main.component';
import { TeamComponent } from './pages/team/team.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: MainComponent },
  { path: 'article', component: IndexArticleComponent },
  { path: 'article/:title', component: DetailArticleComponent },
  { path: 'apps', component: AppsComponent },
  { path: 'team', component: TeamComponent },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
