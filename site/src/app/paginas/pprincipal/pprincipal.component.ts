import { Component } from '@angular/core';
import { LoginComponent } from '../../componente/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InformacoesComponent } from '../../componente/informacoes/informacoes.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-pprincipal',
  standalone: true,
  imports: [LoginComponent,
    ReactiveFormsModule,
    InformacoesComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './pprincipal.component.html',
  styleUrl: './pprincipal.component.css'
})
export class PprincipalComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('.iconemenu')) {
      this.isMenuOpen = false;
    }
  }
}
