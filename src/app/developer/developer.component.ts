
import { Component} from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent {
  developer: Developer = new Developer(
    'Coulibaly',
    'Mathieu',
    38,
    'M',
    "J'apprends le code",
      [
        {
          name: 'Angular',
          logo: 'angular_logo.png',
          site: 'https://angular.io/'
        },
        {
          name: 'JavaScript',
          logo: 'javascript_logo.png',
          site: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        }
      ]
  );
    };








