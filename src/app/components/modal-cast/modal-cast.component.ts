import { Component, ElementRef, Input, Renderer2, viewChild, ViewChild } from '@angular/core';
import { AvatarComponent } from "../avatar/avatar.component";
import { Cast } from '../../@types/cast';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-modal-cast',
   imports: [TranslatePipe],
  templateUrl: './modal-cast.component.html',
  styleUrl: './modal-cast.component.scss'
})
export class ModalCastComponent {
  @Input() modalId: string = 'modal';
  @Input() cast: Cast[] = [];
  @ViewChild('modal', { static: true }) modalElement!: ElementRef;
  // @ViewChild('overlay', { static: true}) overlayElement!: ElementRef;

  constructor(private renderer: Renderer2) { }

  openModal() {
    const modal = document.getElementById(this.modalId);
    // const overlay = this.overlayElement.nativeElement;

    if (modal) {
      this.renderer.addClass(modal, 'show');
      modal.style.display = 'block';
      modal.classList.add('show');
      document.body.classList.add('modal-open');
    }

    // this.renderer.addClass(overlay, 'show');
  }

  closeModal() {
    const modal = document.getElementById(this.modalId);
    // const overlay = this.overlayElement.nativeElement
    if (modal) {
      this.renderer.removeClass(modal, 'show');
      modal.style.display = 'none';
      modal.classList.remove('show');
      document.body.classList.remove('modal-open');
    }

    // this.renderer.removeClass(overlay, 'show');
  }
}
