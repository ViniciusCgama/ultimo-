import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  //variaveis
  @Input() titulo: string = "";
  @Input() primeiroBotao: string = "";
  @Input() segundoBotao: string = "";
  @Input() disableBtn1: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();
  

      //função
      submit(){
        this.onSubmit.emit();  
      }
  
      navigate(){
        this.onNavigate.emit();  
      }
}
