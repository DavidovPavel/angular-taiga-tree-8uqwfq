import { Injectable } from '@angular/core';
import { TreeItemComponent } from '../components/tree-item/tree-item.component';

@Injectable({
  providedIn: 'root',
})
export class TreeController {
  isExpanded(_item: TreeItemComponent): boolean {
    return true;
  }

  toggle(_item: TreeItemComponent): void {}
}
