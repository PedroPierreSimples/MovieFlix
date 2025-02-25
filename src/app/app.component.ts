import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MovieFlix1';

  // public currentLang = 'PT';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['pt-BR', 'en-US', 'es-ES', 'pl-POL']);
    this.translate.setDefaultLang('pt-BR');
    this.translate.use("pt-BR")
  }

}
