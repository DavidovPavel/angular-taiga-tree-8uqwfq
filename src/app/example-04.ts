import { Component } from '@angular/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';

import { FoldersComponent } from './folder.component';
import { TREE_CONTENT } from './tree/misc/tree.tokens';

@Component({
  selector: 'example-04',
  template: `
    <tree
      *ngFor="let item of data.children"
      [treeController]="true"
      [value]="item"
      [content]="content"
      [childrenHandler]="handler"
    ></tree>
  `,
  providers: [
    {
      provide: TREE_CONTENT,
      useValue: new PolymorpheusComponent(FoldersComponent),
    },
  ],
})
export class Example04 {
  readonly content = ({ $implicit }) => $implicit.text;

  readonly handler = (item) => item.children || [];

  readonly data = {
    text: 'Topmost',
    children: [
      {
        text: 'Top level 1',
        children: [
          {
            text: 'Another item',
            children: [
              { text: 'Next level 1' },
              { text: 'Next level 2' },
              { text: 'Next level 3' },
            ],
          },
        ],
      },
      { text: 'Top level 2' },
      {
        text: 'Top level 3',
        children: [{ text: 'Test 1' }, { text: 'Test 2' }],
      },
    ],
  };
}
