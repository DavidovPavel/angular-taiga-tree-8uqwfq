import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, mapTo, startWith, switchMap, tap } from 'rxjs/operators';
import { TREE_START } from '../misc/tree.tokens';
import { TreeLoader } from './loader.service';

const LOADING: any = {};

@Injectable()
export class TreeService<T> {
  private readonly map = new Map<T, readonly T[]>([[LOADING, []]]);

  private readonly load$ = new Subject<T>();

  readonly data$ = this.load$.pipe(
    switchMap((item) =>
      this.loader.loadChildren(item).pipe(
        tap((children) => this.map.set(item, children)),
        map((children) =>
          children.filter((item) => !this.loader.hasChildren(item))
        ),
        tap((children) => children.forEach((child) => this.map.set(child, [])))
      )
    ),
    startWith(null),
    mapTo(this.start)
  );

  constructor(
    @Inject(TREE_START) private readonly start: T,
    private readonly loader: TreeLoader<T>
  ) {}

  isLoading(item: T): boolean {
    return item === LOADING;
  }

  getChildren(item: T): readonly T[] {
    return this.map.get(item) ?? [LOADING];
  }

  loadChildren(item: T) {
    if (this.map.get(item)) {
      return;
    }

    this.map.set(item, [LOADING]);
    this.load$.next(item);
  }
}
