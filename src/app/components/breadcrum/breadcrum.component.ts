// import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrum',
  imports: [RouterLink, CommonModule],
  templateUrl: './breadcrum.component.html',
  styleUrl: './breadcrum.component.scss'
})
export class BreadcrumComponent {
  @Input() breadCrumb!: string[];
  @Input() breadCrumbRoutes!: string[];
  
  // currentRoute: string = '';
}
