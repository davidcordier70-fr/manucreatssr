import { Component, input } from '@angular/core';
import { SousCategory } from 'app/shared/interfaces';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-sscat-list',
  imports: [RouterLink],
  template: `
    <h2>Catégorie d'articles</h2>
    <ul class='mb-20'>

      @for (category of souscategorys(); track category.id) {
        <li [routerLink]="['.', 'products',category.name]">

          <img src="{{ category.image}}">
          <span>{{ category.description}}</span>

        </li>


      }
    </ul>
  `,
  styles: `
    :host {
      display:flex;
      flex-direction:column;
      -webkit-box-shadow: 5px 5px 13px 1px var(--gray-100);
      box-shadow: 5px 5px 13px 1px var(--gray-100);
      padding:20px;
      margin:20px;
      background:#efefef;

    }
    ul {
      display:flex;
      flex-direction:row;
      justify-content:center;

      margin:20px;


    }

    ul li {
      background:black;
      border-radius:8px;
      color:white;
      border:6px solid black;
      margin-right:10px;
      display:flex;
      flex-direction:column;
      align-items:center;
    }

    ul li span {
      text-align:center;
      padding:20px;
    }


    img {
      background-size:cover;
      width:150px;
      height:100%;
    }

  `
})
export class HomeSscatList {

  souscategorys = input.required<SousCategory[]>()

}
