import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Inject,
} from '@angular/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

import { TreeItemContext } from '../../misc/tree.interfaces';
import { TreeController } from '../../services/controller.service';

@Component({
  selector: 'tree-item-content',
  templateUrl: 'tree-item-content.template.html',
  styleUrls: ['tree-item-content.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeItemContentComponent {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT) readonly context: TreeItemContext,
    private readonly controller: TreeController
  ) {}

  get isExpanded(): boolean {
    return this.context.$implicit.isExpanded;
  }

  @HostBinding('class._expandable')
  get isExpandable(): boolean {
    return this.context.$implicit.isExpandable;
  }

  onClick() {
    this.controller.toggle(this.context.$implicit);
  }
}
