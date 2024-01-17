import { Directive, Input } from '@angular/core';

import { TreeItemComponent } from '../components/tree-item/tree-item.component';
import { TreeController } from '../services/controller.service';

@Directive({
  selector: '[treeController]:not([map])',
  exportAs: 'treeController',
  providers: [
    {
      provide: TreeController,
      useExisting: TreeItemControllerDirective,
    },
  ],
})
export class TreeItemControllerDirective extends TreeController {
  @Input('treeController')
  fallback = true;

  private readonly map = new WeakMap<TreeItemComponent, boolean>();

  isExpanded(item: TreeItemComponent): boolean {
    return this.map.get(item) ?? this.fallback;
  }

  toggle(item: TreeItemComponent) {
    this.map.set(item, !this.isExpanded(item));
  }
}
