import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';

import { TreeComponent } from './components/tree/tree.component';
import { TreeItemComponent } from './components/tree-item/tree-item.component';
import { TreeItemContentComponent } from './components/tree-item-content/tree-item-content.component';
import { TreeControllerDirective } from './directives/tree-controller.directive';
import { TreeItemControllerDirective } from './directives/tree-item-controller.directive';
import { TreeNodeDirective } from './directives/tree-node.directive';
import { TreeChildrenDirective } from './directives/tree-children.directive';

@NgModule({
  imports: [CommonModule, PolymorpheusModule],
  declarations: [
    TreeComponent,
    TreeItemComponent,
    TreeItemContentComponent,
    TreeItemControllerDirective,
    TreeChildrenDirective,
    TreeControllerDirective,
    TreeNodeDirective,
  ],
  exports: [
    TreeComponent,
    TreeItemComponent,
    TreeItemControllerDirective,
    TreeChildrenDirective,
    TreeControllerDirective,
  ],
})
export class TreeModule {}
