import { Component, OnInit } from '@angular/core';
import Hero from './class/hero'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello!'
  birthdate = new Date()

  hero = {
    name: 'superman',
    // birthdate: '1989,10,10'
  }
  ngOnInit () {
    console.log('init')
  }

}











