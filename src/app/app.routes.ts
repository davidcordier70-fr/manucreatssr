import { Route, Routes } from "@angular/router";
import { NotFound } from "./views/not-found";
import { Home } from "./views/Home/home";


export const routes:Routes = [
  {
    path:"products/:id",
    loadComponent: async () => (await import ('./views/products/products')).Products

  },
  {
    path:"products",
    loadComponent: async () => (await import ('./views/products/products')).Products

  },
  {
    path:'',
    component:Home
  },
  {
    path:'',
    pathMatch:"full",
    redirectTo:''
  },
  {
    path:'**',
    component:NotFound
  }
]
