import { Directive, Input, OnDestroy, Optional } from '@angular/core';

import { TreeItemComponent } from '../components/tree-item/tree-item.component';
import { TreeAccessor } from '../services/accessor.service';

@Directive({
  selector: 'tree-item[treeNode]',
})
export class TreeNodeDirective<T> implements OnDestroy {
  @Input('treeNode')
  set value(value: T) {
    this.directive?.register(this.component, value);
  }

  constructor(
    @Optional()
    private readonly directive: TreeAccessor<T>,
    private readonly component: TreeItemComponent
  ) {}

  ngOnDestroy() {
    this.directive?.unregister(this.component);
  }
}
