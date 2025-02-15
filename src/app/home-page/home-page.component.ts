import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { CurrencyPipe, NgFor } from '@angular/common';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Session } from 'inspector';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, CurrencyPipe, NgFor, HttpClientJsonpModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent  implements OnInit {

  data:{number: number, average: number}[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    var id = sessionStorage.getItem('id');
    this.http.get<{number: number, average: number}[]>('https://api.coindesk.com/v1/bpi/currentprice.json')
    .subscribe(data => {
      this.data = data;
    });
  }

}


