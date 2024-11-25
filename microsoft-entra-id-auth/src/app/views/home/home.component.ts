import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MsalService } from '@azure/msal-angular';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../services/token.service';

type ProfileType = {
  businessPhones?: string,
  displayName?: string,
  givenName?: string,
  jobTitle?: string,
  mail?: string,
  mobilePhone?: string,
  officeLocation?: string,
  preferredLanguage?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string
}

@Component({
  selector: 'app-home',
  imports: [ CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  profile!: ProfileType | null;
  tokenExpiration!: string;

  constructor(
    private authService: MsalService,
    private http: HttpClient,
    private tokenService: TokenService)
  {}

  async ngOnInit() {
    this.http.get('https://graph.microsoft.com/v1.0/me')
      .subscribe(profile => {
        this.profile = profile;
      });

    const accessToken = await this.tokenService.getToken();
    console.log(accessToken);

    this.tokenExpiration = localStorage.getItem('tokenExpiration')!;
  }

  logout() {
    this.authService.logoutRedirect();
  }

}