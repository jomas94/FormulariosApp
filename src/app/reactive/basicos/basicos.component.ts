import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  // miFormulario: FormGroup = new FormGroup({
  //   nombre:     new FormControl('TV 50\' LED'),
  //   precio:     new FormControl(1200),
  //   existencias: new FormControl(23)
  // })

  miFormulario: FormGroup = this.fb.group({ 
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [ , [Validators.required, Validators.min(0)]],
    existencias: [ , [Validators.required, Validators.min(0)]]
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(){
    this.miFormulario.reset({
      nombre:'iPhone X',
      precio: 2000,
      // existencias: 22
    })
  }
  
  campoNoEsValido(input:string){
    return this.miFormulario.controls[input].errors 
            && this.miFormulario.controls[input].touched;
  }

  guardar(){

    if( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
  

}
