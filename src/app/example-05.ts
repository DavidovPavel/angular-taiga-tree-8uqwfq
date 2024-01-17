import { Component } from '@angular/core';
import { Loader } from './service';
import { TREE_START } from './tree/misc/tree.tokens';
import { TreeLoader } from './tree/services/loader.service';
import { TreeService } from './tree/services/tree.service';

export interface Item {
  readonly text: string;
  readonly children?: boolean;
}

@Component({
  selector: 'example-05',
  template: `
    <tree
      [treeController]="false"
      [map]="map"
      [value]="service.data$ | async"
      [childrenHandler]="childrenHandler"
      [content]="content"
      (toggled)="onToggled($event)"
    ></tree>

    <ng-template #content let-item>
      <ng-container *ngIf="service.isLoading(item) else text">
        Loading...
      </ng-container>
      <ng-template #text>{{item.text}}</ng-template>
    </ng-template>
  `,
  providers: [
    TreeService,
    {
      provide: TREE_START,
      useValue: { text: 'Topmost' },
    },
    {
      provide: TreeLoader,
      useClass: Loader,
    },
  ],
})
export class Example05 {
  map = new Map<Item, boolean>();

  constructor(readonly service: TreeService<Item>) {}

  childrenHandler: any = (item) => this.service.getChildren(item);

  onToggled(item: Item) {
    this.service.loadChildren(item);
  }
}
