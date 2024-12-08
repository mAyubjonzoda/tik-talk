import { Component } from '@angular/core';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';
import { RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCardComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'title';
}
