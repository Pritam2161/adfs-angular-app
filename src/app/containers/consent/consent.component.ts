import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-consent',
  template: `<iframe id="" class="style" [src]="src"></iframe>`,
  styles: [`
    .style {
      overflow: hidden;
      overflow-x: hidden;
      overflow-y: hidden;
      height: calc(100% - 20px);
      width: calc(100% - 20px);
      margin-top: 2px;
    }
  `]
})
export class ConsentComponent {
  src: SafeResourceUrl;
  constructor(private oauthService: OAuthService, private sanitizer: DomSanitizer) { 
    let claims: any = this.oauthService.getIdentityClaims();
    const url = 'https://consent-poc.zeotap.com/login';
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(`${url}?${claims.upn}`)
  }
}