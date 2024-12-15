import { Component } from '@angular/core';
import { SidebarCardComponent } from './sidebar-card/sidebar-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarCardComponent, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuItems = [
    {
      label: 'Моя страница',
      img: '/assets/imgs/home.svg',
      link: '#',
    },
    {
      label: 'Чаты',
      img: '/assets/imgs/chats.svg',
      link: '#',
    },
    {
      label: 'Поиск',
      img: '/assets/imgs/search.svg',
      link: '#',
    },
  ];
}
