import { Observable } from 'rxjs';

export abstract class TreeLoader<T> {
  abstract loadChildren(item: T): Observable<T[]>;
  abstract hasChildren(item: T): boolean;
}
