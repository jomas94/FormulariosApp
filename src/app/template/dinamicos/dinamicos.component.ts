import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona{
  nombre: string;
  favoritos: Favorito[],
}

interface Favorito{
  id: number,
  favorito: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})

export class DinamicosComponent {

  @ViewChild('miFormularioDinamico') miFormularioDinamico!: NgForm;

  persona: Persona = {
    nombre: 'Jomario',
    favoritos: [
      { id: 1, favorito: 'MarioKart'},
      { id: 2, favorito: 'MortalKombat'},
    ]
  }

  guardar(){
    console.log('formulario');
    
  }

  nombreValido():boolean{
    return this.miFormularioDinamico?.controls.producto?.errors ? true: false;
  }

  eliminar( i:number){
    this.persona.favoritos.splice(i, 1);
  }




}
