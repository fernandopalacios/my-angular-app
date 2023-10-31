import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HomeComponent,
    RouterLink,
    RouterModule
  ]
})
export class AppComponent {
  title = 'homes';
}
