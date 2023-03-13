import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MainComponent } from './pages/main/main.component';

import { AppsComponent } from './pages/apps/apps.component';
import { TeamComponent } from './pages/team/team.component';
import { HeaderComponent } from './layouts/header/header.component';
import { IndexArticleComponent } from './pages/article/index-article/index-article.component';
import { DetailArticleComponent } from './pages/article/detail-article/detail-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,

    AppsComponent,
    TeamComponent,
    HeaderComponent,
    IndexArticleComponent,
    DetailArticleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
