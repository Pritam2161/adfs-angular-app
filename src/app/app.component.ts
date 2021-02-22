import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App';
  tabs = [
    {
      id: 'home',
      name: 'HOME',
      routerLink: 'home',
    },
    {
      id: 'consent',
      name: 'CONSENT',
      routerLink: 'consent',
    },
  ];

  constructor(public oauthService: OAuthService) {
    this.initializeADFSConfiguring();
  }

  initializeADFSConfiguring() {
    this.oauthService.configure({
      issuer: 'https://EC2AMAZ-GTQ37QG.zeotab.net/adfs',
      clientId: 'e05261c4-4f8d-4365-a7e4-6582e3133c77',
      redirectUri: `${window.location.origin}/home`,
      scope: 'openid profile',
      loginUrl: 'https://ec2amaz-gtq37qg.zeotab.net/adfs/oauth2/authorize',
      oidc: true,
      responseType: 'id_token token',
    });
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    if (!this.oauthService.hasValidAccessToken()) {
      this.oauthService.loadDiscoveryDocumentAndTryLogin()
        .then(() => {
          if (!this.oauthService.hasValidAccessToken()) {
            this.oauthService.initImplicitFlow();
          }
        });
    }
  }


}
