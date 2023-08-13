import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app';

  today = new Date();

  imageURL = "HTTPS://DOTNETHOW.NET/IMAGES/MOVIES/MOVIE-1.JPEG";

  price = 10;

  sellingPrice = 15.50;
}
