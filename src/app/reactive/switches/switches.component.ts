import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  miForm: FormGroup = this.formBuilder.group({
    genero:['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones:[false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(){
    this.miForm.reset({
      ...this.persona, 
      condiciones: false
    });

    this.miForm.valueChanges.subscribe( ({condiciones, ...rest }) => {
      this.persona = rest;
      
    })
  }


  guardar(){

    const formValue = {...this.miForm.value};
    delete formValue.condiciones;
    this.persona = formValue;  
    console.log(formValue);
    
  }

}
