import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
roles: string[];
isAdmin:boolean =false;
  constructor(private tokenService: TokenService, private authService: AuthService,public router: Router) { }

  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(role =>{
      if(role === 'ROLE_ADMIN'){
        this.isAdmin = true;
        console.log("El usuario es admin")
      } else
      console.log("El usuario NO ES admin")
    })
  }
  //logout y redirect to login
logout(){
  this.tokenService.logOut() ;
  window.location.reload();
  this.router.navigate(['login']);
}
}
