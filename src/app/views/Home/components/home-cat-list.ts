import { Component, input } from '@angular/core';
import { Category } from 'app/shared/interfaces';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-cat-list',
  imports: [RouterLink],
  template: `

    <ul class='mb-20'>
      @for (category of categorys(); track category.id) {
        <li routerLink="products">
          <img src="{{ category.image}}" class='mr-20'>
          {{ category.description}}

        </li>


      }
    </ul>
  `,
  styles: `

    ul {
      display:flex;
      flex-direction:row;
      justify-content:center;
      padding-top:20px;
    }

    ul li {
      display:flex;
      flex-direction:row;
      align-items:center;
      background:black;
      border-radius:8px;
      color:white;
      padding:20px;
      margin-right:20px;
       -webkit-box-shadow: 5px 5px 11px 1px rgba(0,0,0,0.61);
     box-shadow: 5px 5px 11px 1px rgba(0,0,0,0.61);


    }

    img {
      width:100px;

    }

  `
})
export class HomeCatList {

  categorys = input.required<Category[]>()

}
