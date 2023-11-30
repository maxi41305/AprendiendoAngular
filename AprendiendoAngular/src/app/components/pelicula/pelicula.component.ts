import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
  @Input() pelicula: Pelicula;
  @Output() MarcarFavorita = new EventEmitter();

  constructor() { 
    this.pelicula = new Pelicula("",0,"");
  }

  ngOnInit() {
  }

  seleccionar(event: any, pelicula: any){
   this.MarcarFavorita.emit({
      pelicula: pelicula
   });
  }
}
