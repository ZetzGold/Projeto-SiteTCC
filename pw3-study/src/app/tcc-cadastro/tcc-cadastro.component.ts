import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-tcc-cadastro',
  templateUrl: './tcc-cadastro.component.html',
  styleUrls: ['./tcc-cadastro.component.css']
})
export class TCCCadastroComponent {
  ocultarSenha:boolean = true;
  css:string = 'container';
  visivel:string = 'oculto';
  erro_visivel:string = 'erro_oculto';
  ocultarSenha2:boolean = true;
  constructor(private formularioReativo: FormBuilder){}

  cadastroForm = this.formularioReativo.group({
    nome: this.formularioReativo.control('',[Validators.required]),
    email: this.formularioReativo.control('',[Validators.required, Validators.email]),
    cpf: this.formularioReativo.control('',[Validators.required]),
    senha: this.formularioReativo.control('',[Validators.required, Validators.minLength(2), Validators.maxLength(17)]),
    confirmarSenha: this.formularioReativo.control('', [Validators.required]),
  });

  onEnviar(){
    this.cadastroForm.markAllAsTouched(); // Marca todos os controles como tocados
    if(this.cadastroForm.value.confirmarSenha != this.cadastroForm.value.senha){
      this.erro_visivel = 'erro_visivel';
      setTimeout(() => {
        this.erro_visivel = 'erro_visivel2';
      }, 100);
      setTimeout(() => {
        this.erro_visivel = 'erro_oculto';
      }, 3000);
    }
    if (this.cadastroForm.valid && this.cadastroForm.value.confirmarSenha == this.cadastroForm.value.senha) {
      console.table(this.cadastroForm.value);
      this.visivel = 'visivel';
      setTimeout(() => {
        this.visivel = 'visivel2';
      }, 100);
      setTimeout(() => {
        this.visivel = 'oculto';
      }, 3000);
    }
  }

  alternarCadastro(){
    if(this.css == 'container'){
      this.css = 'container2';
    }
    else{
      this.css = 'container';
    }
  }
}
