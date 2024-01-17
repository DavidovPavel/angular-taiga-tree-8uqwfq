import { Component, Input } from '@angular/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';

import { TreeChildrenDirective } from '../../directives/tree-children.directive';
import { TreeContext } from '../../misc/tree.interfaces';
import { TREE_NODE } from '../../misc/tree.tokens';

@Component({
  selector: 'tree[value]',
  templateUrl: 'tree.template.html',
  styleUrls: ['tree.style.less'],
  providers: [
    {
      provide: TREE_NODE,
      useExisting: TreeComponent,
    },
  ],
  host: {
    role: 'tree',
  },
})
export class TreeComponent<T> {
  @Input()
  value: T;

  @Input()
  content: PolymorpheusContent<TreeContext<T>>;

  constructor(private readonly directive: TreeChildrenDirective<T>) {}

  get children(): T[] {
    return this.directive.childrenHandler(this.value);
  }
}
