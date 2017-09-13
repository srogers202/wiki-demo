# WikiDemo



# Step 2

export class AppComponent {
  items: Array<string>;
  term = new FormControl();

  constructor(private wikiService: WikiService) {
    this.term.valueChanges
      .debounceTime(400)
      .subscribe(term => this.wikiService.search(term).then(items => this.items = items));
  }
}

<input type="text" [formControl]="term" placeholder="Enter a search term">



# Step 3

distinctUntilChanged



# Step 4

return this.jsonp
              .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
              .map((response) => response.json()[1]);
             
next -> subscribe



# Step 5


this.term.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .flatMap(term => this.wikiService.search(term))
      .subscribe(items => this.items = items);


# Step 6

switchMap


# Step 7

async pipe
