import { TreeItemComponent } from '../components/tree-item/tree-item.component';

export abstract class TreeAccessor<T> {
  abstract register(item: TreeItemComponent, value: T): void;
  abstract unregister(item: TreeItemComponent): void;
}
