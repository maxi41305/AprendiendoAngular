import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman 4", 2019, "https://i.ytimg.com/vi/qSQTdrMSmSY/maxresdefault.jpg"),
            new Pelicula("Los vengadores Endgame", 2018, "http://as01.epimg.net/tikitakas/imagenes/2019/04/26/portada/1556258369_131914_1556258703_noticia_normal.jpg"),
            new Pelicula("Batman vs Superman", 2015, "https://www.prensa.com/cultura/Batman-Superman-Dawn-Justice-Unidos_LPRIMA20160326_0125_34.jpg")
          ];
    }

    holaMundo(){
        return 'Hola Mundo desde un servicio de Angular !!!';
    }

    getPeliculas(){
        return this.peliculas;
    }
}