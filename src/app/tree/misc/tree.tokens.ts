import { InjectionToken } from '@angular/core';
import {
  PolymorpheusComponent,
  PolymorpheusContent,
} from '@tinkoff/ng-polymorpheus';
import { TreeItemContentComponent } from '../components/tree-item-content/tree-item-content.component';

import { TreeItemContext } from './tree.interfaces';

export const TREE_NODE = new InjectionToken('');

export const TREE_START = new InjectionToken('');

export const TREE_CONTENT = new InjectionToken<
  PolymorpheusContent<TreeItemContext>
>('', {
  factory: () => new PolymorpheusComponent(TreeItemContentComponent),
});
