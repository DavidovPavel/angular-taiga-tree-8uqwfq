import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'tree[childrenHandler]',
})
export class TreeChildrenDirective<T> {
  @Input()
  childrenHandler: (item: T) => T[] = (item) =>
    Array.isArray(item) ? item : [];
}
