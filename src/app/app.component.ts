import { Component } from '@angular/core';
import Hero from './class/hero'

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <h2>My favorite hero is: {{ myHero.name }}</h2>
    <p>Heros:</p>
    <ul>
      <li *ngFor="let hero of heroes">{{ hero.name }}</li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
  `,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string
  desc: string
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ]
  myHero = this.heroes[0]

  constructor() {
    this.title = 'Tour of Heroes'
    this.desc = 'Identity'
  }
}











