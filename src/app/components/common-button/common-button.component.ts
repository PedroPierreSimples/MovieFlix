import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-common-button',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './common-button.component.html',
  styleUrl: './common-button.component.scss'
})
export class CommonButtonComponent {
  @Input() iconPlus?: boolean = false;
  @Input() iconArrow?: boolean = false;
  @Input() botaoVerMais?: boolean = false;
  @Input() botaoVerFilmes?: boolean = false;
  @Input() label!: string; 
}
