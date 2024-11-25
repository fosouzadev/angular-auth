import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult, PopupRequest } from '@azure/msal-browser';
import { firstValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private authService: MsalService) { }

  async getToken() : Promise<string | null> {  
    const account = this.authService.instance.getAllAccounts()[0];
    
    if (!account)
      return null;
    
    try {
      const response: AuthenticationResult = await firstValueFrom(this.authService.acquireTokenSilent({ account: account, scopes: ['User.Read'] }));
      return response.accessToken;
    }
    catch (error) {
      const request: PopupRequest = { scopes: ['User.Read'] };
      const response: AuthenticationResult = await firstValueFrom(this.authService.acquireTokenPopup(request));
      return response.accessToken;
    }
  }
}