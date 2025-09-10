import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-sexto-componente',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './sexto-componente.html',
  styleUrl: './sexto-componente.css'
})
export class SextoComponente {

//Inclusão de duas variáveis.
formulario = new FormGroup({
  nome: new FormControl('',[Validators.required, Validators.minLength(3)]),
  idade: new FormControl('null' ,[Validators.required, Validators.min(18), Validators.max(120)]),
  cidade: new FormControl('',[Validators.required, Validators.minLength(3)])
});
}
