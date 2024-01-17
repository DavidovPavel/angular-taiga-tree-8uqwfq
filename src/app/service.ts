import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { Item } from './example-05';
import { TreeLoader } from './tree/services/loader.service';

@Injectable()
export class Loader extends TreeLoader<Item> {
  loadChildren({ text }: Item): Observable<Item[]> {
    return timer(3000).pipe(
      mapTo([
        { text: `${text} 1`, children: Math.random() > 0.5 },
        { text: `${text} 2`, children: Math.random() > 0.5 },
        { text: `${text} 3`, children: Math.random() > 0.5 },
      ])
    );
  }

  hasChildren({ children }: Item): boolean {
    return !!children;
  }
}
