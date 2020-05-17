import { Component } from '@angular/core';
import { MakuepService } from '../services/makuep.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private makuepService: MakuepService
  ) {

    this.makuepService.getProducts().subscribe((products) => {
      console.log('produtso', products);
    })
  }



}
