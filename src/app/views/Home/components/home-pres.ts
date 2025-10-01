import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-pres',
  imports: [RouterLink],
  template: `
    <div class='d-flex flex-row'>
      <img src="accueil.jpg">
      <div class='d-flex flex-column text-description'>
        <h2>Bienvenue sur Manue Creat !</h2>
        <p> Le site Manue Creat vous popose une multitude d'objets (Colliers, Bagues, Porte-clés, Broches, etc.)
          pour les jeunes de 7 à 77 ans !
        </p>
        <p> N'hésitez pas à consulter nos produits de grande qualité et entièrement faits à la main !
        </p>
        <button class='btn btn-primary' [routerLink]="['.', 'products','all']">Découvrir nos produits</button>

        <div class='new-products mt-30' >
          <div class='d-flex flex-row '>
            <div class='d-flex flex-column new'>
              <span class='title-news'>Nouveautés</span>
              <div class='d-flex flex-row new-products-new'>
                <img src='image1.jpg' class='mr-20'>
                <img src='image2.jpg'>
              </div>
              <span class='text-plus'>Voir plus...</span>
            </div>

            <div class='d-flex flex-column ml-40 cp'>
              <span class='title-news'>Coup de coeur</span>
              <div class='d-flex flex-row new-products-cp'>
                <img src='image1.jpg' class='mr-20'>
                <img src='image2.jpg'>
              </div>
              <span class='text-plus'>Voir plus...</span>
            </div>
          <div>
        </div>
      </div>
    </div>



  `,
  styles: `
    :host {
      border-radius:10px;
      background-color:#efefef;
      display:block;
      margin:20px;

    }

    img {
      width:700px;
     -webkit-box-shadow: 5px 5px 13px 1px var(--gray-100);
      box-shadow: 5px 5px 13px 1px var(--gray-100);
    }

    .text-description {
      text-align:justify;
      padding-left:20px;
     -webkit-box-shadow: 5px 5px 13px 1px var(--gray-100);
      box-shadow: 5px 5px 13px 1px var(--gray-100);
      padding-right:20px;
      padding-top:20px;

    }

    .text-description button {
      width:200px;
    }

    .new {
      -webkit-box-shadow: 5px 5px 13px 1px var(--gray-100);
      box-shadow: 5px 5px 13px 1px var(--gray-100);
    }

    .cp {
      -webkit-box-shadow: 5px 5px 13px 1px var(--gray-100);
      box-shadow: 5px 5px 13px 1px var(--gray-100);
    }

    .new-products-title {
      background:black;
    }

    .new-products .title-news {
      color:white;
      background:black;
      padding:10px;
    }

    .new-products  {
      display:flex;
      justify-content:center;
    }

    .new-products img  {
      background:white;
       width:100px;
    }

    .new-products-new {
      padding:20px 20px 10px 20px;

    }

    .new-products-cp {
      padding:20px 20px 10px 20px;

    }

    .text-plus {
      background:none;
      color:black;
      padding-bottom:10px;
      padding-left:20px;
      font-size:14px;

    }





      `
})
export class HomePres {


}
