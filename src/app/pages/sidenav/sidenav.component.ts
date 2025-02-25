import { Component, Input } from '@angular/core';
import { AvatarComponent } from "../../components/avatar/avatar.component";
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent } from "../../components/language-selector/language-selector.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-sidenav',
  imports: [AvatarComponent, RouterLink, RouterLinkActive, CommonModule, TranslatePipe],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  constructor( private route : Router){}

  isInMovies(): boolean {
    
    return this.route.isActive("/movies", true) || this.route.url.startsWith('/movie');
    
  }
}


