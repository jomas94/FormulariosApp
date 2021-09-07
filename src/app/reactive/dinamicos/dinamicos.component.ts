import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miForm: FormGroup = this.formBuilder.group({
    nombre: ['' , [Validators.required, Validators.minLength(2), ]],
    favoritos: this.formBuilder.array([
      ['Samsung',],
      ['Xaomi',]
    ], Validators.required)
  })

  nuevoFavorito:FormControl = this.formBuilder.control('', Validators.required);



  get favoritoArr(){
    return this.miForm.get('favoritos') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  campoNoEsValido( input: string){
    return this.miForm.controls[input].errors 
          && this.miForm.controls[input].touched;
  }

  guardar(){
    
    if(this.miForm.invalid){
      this.miForm.markAllAsTouched();
      return;
    }

    console.log(this.miForm.value);
  }

  agregarFavorito(){
     if(this.nuevoFavorito.invalid){
        return;
    }
    // this.favoritoArr.push( new FormControl(this.nuevoFavorito.value, Validators.required)); 
    this.favoritoArr.push(this.formBuilder.control(this.nuevoFavorito.value, Validators.required)); 
    this.nuevoFavorito.reset();
  }

  borrar(fav:number){
    this.favoritoArr.removeAt(fav);
    console.log('borrar');
    
  }


}
