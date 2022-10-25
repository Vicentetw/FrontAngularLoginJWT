import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontAngularLoginJWT';
  
  public loginValid = true;
  public username = '';
  public password = '';
  
  
}
