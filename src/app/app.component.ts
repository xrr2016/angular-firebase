import { Component } from '@angular/core';
import Hero from './class/hero'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
  imgSrc="https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp15touch/silver/mbp15touch-silver-select-201610_GEO_CN?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1477352386218"
  itemClass = 'text-gray'

  constructor() {
    this.title = 'Tour of Heroes'
    this.desc = 'Identity'
  }

  getVal ():number {
    return 10
  }

  deleteHero (hero):void {
    this.heroes.splice(this.heroes.findIndex(hero => hero.id === hero.id), 1)
  }
  onClick ():void {
    console.log('clicked')
  }
}











