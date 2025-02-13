import { Component } from '@angular/core';
import {HeaderComponent} from "../components/header/header.component";

@Component({
  selector: 'app-shoots-page',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './shoots-page.component.html',
  styleUrl: './shoots-page.component.css'
})
export class ShootsPageComponent {

}
