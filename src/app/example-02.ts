import { Component } from '@angular/core';
import { DATA } from './data';

@Component({
  selector: 'example-02',
  template: `
    <tree
      [treeController]="true"
      [value]="data"
      [content]="content"
      [childrenHandler]="handler"
    ></tree>

    <ng-template #content let-value>
      <img *ngIf="value.icon" src="value.icon">
      {{ value.text }}
    </ng-template>
  `,
})
export class Example02 {
  readonly handler = (item) => item.children || [];

  readonly data = DATA;
}
