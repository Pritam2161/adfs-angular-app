import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  template: `
    <div class="content">Welcome to {{getClaim()}} </div>
  `,
  styles: [`.content {
    font-size: 16px;
   }
  `]
})
export class HomeComponent {
  constructor(private oauthService: OAuthService) { }

  getClaim() {
    let claims: any = this.oauthService.getIdentityClaims();
    return !claims ? null : claims.unique_name
  }
}