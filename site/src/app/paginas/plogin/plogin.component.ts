import { Component, } from '@angular/core';
import { LoginComponent } from '../../componente/login/login.component';
import { FormControl, FormGroup, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';
import { InformacoesComponent } from '../../componente/informacoes/informacoes.component';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface LoginForm{
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-plogin',
  standalone: true,
  imports: [LoginComponent,
    ReactiveFormsModule,
    InformacoesComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './plogin.component.html',
  styleUrl: './plogin.component.css'
})
export class PloginComponent {

  loginForm!: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ){
    this.loginForm = new FormGroup ({
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required, Validators.minLength(8)]),
    })

  }

  submit() {
    window.location.href = 'http://localhost:4200/feed';
    this.loginService.entrar(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => {
        this.toastService.success("Login feito com sucesso");
      },
      error: () => this.toastService.error("Algo deu errado")
    });
  }

  navigate(){
    this.router.navigate(["cadastro"])
  }

}



