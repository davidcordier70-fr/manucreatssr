import { Component, signal } from '@angular/core';
import { Header } from './components/header';
import { Footer } from "./components/footer";
import { RouterOutlet } from "@angular/router";



@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  template: `<app-header />
            <!-- <app-coktails /> !-->
            <router-outlet />
            <app-footer />`,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('manucreat');

  constructor() {
    //seeddata()
    //removedata()
  }

}
