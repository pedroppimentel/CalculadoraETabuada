import { Component } from '@angular/core';
import { faCalculator, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'IndexComponent',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent {
  faCalculator = faCalculator;
  faTimes = faTimes;
}


