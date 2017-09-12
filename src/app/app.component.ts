import { Component } from '@angular/core';
import { WikiService } from './wiki.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Array<string>;

  constructor(private wikiService: WikiService) {}

  search(term) {
    this.wikiService.search(term)
      .then(items => this.items = items);
  }
}


