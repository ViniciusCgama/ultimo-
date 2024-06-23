import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent,  } from './componente/login/login.component';
import { PprincipalComponent } from "./paginas/pprincipal/pprincipal.component";

import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FooterComponent, NavbarComponent, CommonModule, RouterOutlet, LoginComponent, PprincipalComponent]
})
export class AppComponent {
  title = 'Manthano';
}
