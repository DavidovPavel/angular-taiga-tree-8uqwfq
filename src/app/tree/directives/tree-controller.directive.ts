import { Directive, EventEmitter, Input, Output } from '@angular/core';

import { TreeItemComponent } from '../components/tree-item/tree-item.component';
import { TreeAccessor } from '../services/accessor.service';
import { TreeController } from '../services/controller.service';

@Directive({
  selector: '[treeController][map]',
  exportAs: 'treeController',
  providers: [
    {
      provide: TreeAccessor,
      useExisting: TreeControllerDirective,
    },
    {
      provide: TreeController,
      useExisting: TreeControllerDirective,
    },
  ],
})
export class TreeControllerDirective<T>
  implements TreeController, TreeAccessor<T>
{
  @Input('treeController')
  fallback = true;

  @Input()
  map: Map<T, boolean> = new Map();

  @Output()
  readonly toggled = new EventEmitter<T>();

  readonly items = new Map<TreeItemComponent, T>();

  register(item: TreeItemComponent, value: T) {
    this.items.set(item, value);
  }

  unregister(item: TreeItemComponent) {
    this.items.delete(item);
  }

  isExpanded(item: TreeItemComponent): boolean {
    const value = this.items.get(item);

    return (value && this.map.get(value)) ?? this.fallback;
  }

  toggle(item: TreeItemComponent) {
    const value = this.items.get(item);
    const expanded = this.isExpanded(item);

    if (value === undefined) {
      return;
    }

    this.toggled.emit(value);
    this.map.set(value, !expanded);
  }
}
