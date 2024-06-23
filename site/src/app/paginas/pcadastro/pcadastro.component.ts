import { Component, } from '@angular/core';
import { LoginComponent } from '../../componente/login/login.component';
import { FormControl, FormGroup, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';
import { InformacoesComponent } from '../../componente/informacoes/informacoes.component';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface PcadastroForm{
  name: FormControl,
  email: FormControl,
  phone: FormControl,
  password: FormControl,
  confirmapassword: FormControl

}

@Component({
  selector: 'app-pcadastro',
  standalone: true,
  imports: [LoginComponent,
    ReactiveFormsModule,
    InformacoesComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './pcadastro.component.html',
  styleUrl: './pcadastro.component.css'
})
export class PcadastroComponent {

  pcadastroForm!: FormGroup<PcadastroForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ){
    this.pcadastroForm = new FormGroup ({
      name:new FormControl ('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required, Validators.minLength(8)]),
      confirmapassword: new FormControl ('', [Validators.required, Validators.minLength(8)]),
      phone: new FormControl ('', [Validators.required, Validators.minLength(11)])
    })

  }

  submit(){
     this.loginService.cadastro(this.pcadastroForm.value.name, this.pcadastroForm.value.email, this.pcadastroForm.value.phone, this.pcadastroForm.value.password, this.pcadastroForm.value.confirmapassword).subscribe({
      next: () => this.toastService.success("Cadastro feito com sucesso"),
      error: () => this.toastService.error("Algo deu errado")
     })
  }

  navigate(){
    this.router.navigate(["login"])
  }

}



