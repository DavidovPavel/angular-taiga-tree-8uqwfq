import { Component } from '@angular/core';

@Component({
  selector: 'example-01',
  template: `
    <ng-container [treeController]="true">
      <tree-item>
        Fruits
        <tree-item>
          Apples
          <tree-item>Granny Smith</tree-item>
          <tree-item>Red Delicious</tree-item>
        </tree-item>
        <tree-item>Oranges</tree-item>
      </tree-item>
      <tree-item>
        Animals
        <tree-item>Cats</tree-item>
        <tree-item>Dogs</tree-item>
      </tree-item>
    </ng-container>
  `,
})
export class Example01 {}
