import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule], // Incluye HttpClientModule en los imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prueba_tecnica_frontend';
  breeds: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://dogapi.dog/api/v2/breeds').subscribe(response => {
      this.breeds = response.data;
    });
  }
}
