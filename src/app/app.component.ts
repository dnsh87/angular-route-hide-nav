import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { tap, map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showNav$: Observable<boolean>;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.showNav$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event: any) => event.url.endsWith('path2'))
    );
  }
}
