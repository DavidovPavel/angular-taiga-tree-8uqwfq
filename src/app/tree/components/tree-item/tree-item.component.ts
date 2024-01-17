import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  DoCheck,
  ElementRef,
  HostBinding,
  Inject,
  QueryList,
} from '@angular/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';

import { TreeItemContext } from '../../misc/tree.interfaces';
import { TREE_CONTENT, TREE_NODE } from '../../misc/tree.tokens';
import { TreeController } from '../../services/controller.service';

@Component({
  selector: 'tree-item',
  templateUrl: './tree-item.template.html',
  styleUrls: ['./tree-item.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TREE_NODE,
      useExisting: TreeItemComponent,
    },
  ],
  host: {
    role: 'treeitem',
  },
})
export class TreeItemComponent implements DoCheck {
  private readonly change$ = new Subject<void>();

  @ContentChildren(TREE_NODE)
  private readonly nested: QueryList<unknown>;

  readonly expanded$ = this.change$.pipe(
    startWith(null),
    map(() => this.isExpanded),
    distinctUntilChanged()
  );

  readonly attached$ = this.change$.pipe(
    map(() => this.elementRef.nativeElement.isConnected),
    distinctUntilChanged()
  );

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly controller: TreeController,
    @Inject(TREE_CONTENT)
    readonly content: PolymorpheusContent<TreeItemContext>
  ) {}

  @HostBinding('class._expandable')
  get isExpandable(): boolean {
    return !!this.nested.length;
  }

  get isExpanded(): boolean {
    return this.controller.isExpanded(this);
  }

  ngDoCheck() {
    this.change$.next();
  }
}
