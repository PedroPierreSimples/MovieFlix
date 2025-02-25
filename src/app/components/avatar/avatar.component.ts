import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() nome!: string;
  @Input() imagem!: string;
  @Input() papel?: string;
  @Input() isActor?: boolean = false;



  

}
