import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router"


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <a routerLink="/" class='flex-fill'>Logo ManueCreat</a>
    <ul class='d-flex flex-row align-items-center'>
      <li routerLink="admin" routerLinkActive='active-item' class='pr-10 mr-20'>Admin</li>
      <li routerLink="connexion" routerLinkActive='active-item' class='pr-10 mr-20'>Connexion</li>
      <li routerLink="cart" routerLinkActive='active-item'>
        Panier
    </ul>
  `,
  styles: `
    :host {
      display:flex;
      flex:row;
      align-items:center;
      background-color:var(--primary);
      height:100px;
      color:white;
      padding:20px;
    }
    a {
      text-align:left;
      color:white;    }
  `
})
export class Header {





}
