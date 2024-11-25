import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MsalModule, MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    MsalModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-frontend';

  constructor(
    private msalService: MsalService,
    private router: Router)
  {}

  ngOnInit(): void {
    this.msalService.handleRedirectObservable().subscribe({
      next: (result) => {
        console.log(result);

        if (result != null){
          this.router.navigate(['/home']);
        }
        else {
          this.router.navigate(['/']);
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
