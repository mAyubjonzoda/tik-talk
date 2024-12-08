import { Component, inject } from '@angular/core';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';
import { ProfileService } from './data/services/profile.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';
import { Profile } from './data/interfaces/profile.interfaces';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCardComponent, CommonModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'title';
  profileService = inject(ProfileService);
  profiles: Profile[] = [];

  constructor() {
    this.profileService.getTestAccounts().subscribe((val: Profile[]) => {
      this.profiles = val;
    });
  }
}
