import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServices } from './service/common-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blog-client';
  currentScreen: string = 'MAIN';
  constructor(private service: CommonServices, private router: Router) {
    
  }
  ngOnInit(): void {
    if(window && window.location && window.location.href && window.location.href.includes('/') && window.location.href.split('/') && window.location.href.split('/').length > 0
      && window.location.href!.split('/').pop()) {
      this.changeScreen(window.location.href!.split('/').pop()?.toUpperCase() ?? '');
    }
    
  }

  changeScreen(screen: string) {
    this.currentScreen = screen;
    if(this.currentScreen == 'LOGIN') {
      this.router.navigate(['/login']);
    }
    if(this.currentScreen == 'REGISTER') {
      this.router.navigate(['/register']);
    }
    if(this.currentScreen == 'ADDCONTENT') {
      this.router.navigate(['/addContent']);
    }
  }
}
