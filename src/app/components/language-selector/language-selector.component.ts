import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { TranslateService } from '@ngx-translate/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-language-selector',
  imports: [FormsModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent {
  language: string = 'pt-BR';

  constructor(private movieService: MoviesService, private translateService: TranslateService){}
  
  changeLanguage(language: string){
    console.log(language);
    
  }
  
  switchLanguage(language: string){
    this.movieService.switchLanguage(this.language);
    this.translateService.use(language);
    console.log(language);
    
  }
  
}
