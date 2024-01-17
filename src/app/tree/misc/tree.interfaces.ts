import { TemplateRef } from '@angular/core';

import { TreeItemComponent } from '../components/tree-item/tree-item.component';

export interface ContextWithImplicit<T> {
  $implicit: T;
}

export interface TreeItemContext
  extends ContextWithImplicit<TreeItemComponent> {
  readonly template: TemplateRef<unknown>;
}

export interface TreeContext<T> extends ContextWithImplicit<T> {
  readonly node: TreeItemComponent;
}
