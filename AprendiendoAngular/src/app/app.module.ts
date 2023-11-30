import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFileUploaderModule } from "angular-file-uploader";


import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { BlogComponent } from './components/blog/blog.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { SearchComponent } from './components/search/search.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SliderComponent } from './components/slider/slider.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    ArticleComponent,
    ArticleEditComponent,
    ArticleNewComponent,
    ArticlesComponent,
    BlogComponent,
    ErrorComponent,
    FooterComponent,
    FormularioComponent,
    HeaderComponent,
    HomeComponent,
    PaginaComponent,
    PruebasComponent,
    SearchComponent,
    SidebarComponent,
    SliderComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    //AngularFileUploaderModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
