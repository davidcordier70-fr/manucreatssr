import { Component, signal } from '@angular/core';
import { HomeCatList } from "./components/home-cat-list";
import { HomePres } from "./components/home-pres";
import { HomeSscatList } from "./components/home-sscat-list";
import { HomeEvents } from "./components/home-events";
import { Category, SousCategory } from 'app/shared/interfaces';
import { catagoryData } from 'app/shared/data/category.data'
import { sousCatagorysData } from 'app/shared/data/sousCategory';

@Component({
  selector: 'app-home',
  imports: [HomeCatList, HomePres,  HomeEvents, HomeSscatList],
  template: `
    <app-home-cat-list [categorys]="categorys()"/>
    <app-home-pres />
    <app-home-sscat-list [souscategorys]="souscategorys()"/>
    <app-home-events />
  `,
  styles: `
    :host {
      margin:auto;
      display:flex;
      flex:1;
      flex-direction:column;
      background:white;
      width:150vh;

    }
  `
})
export class Home {
  categorys = signal(<Category[]>(catagoryData))
  souscategorys = signal(<SousCategory[]>(sousCatagorysData))



}
