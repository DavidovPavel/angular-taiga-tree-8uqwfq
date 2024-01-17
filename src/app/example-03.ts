import { Component } from '@angular/core';
import { DATA } from './data';

@Component({
  selector: 'example-03',
  template: `
    <tree
      [treeController]="false"
      [map]="map"
      [value]="data"
      [content]="content"
      [childrenHandler]="handler"
    ></tree>

    <p>
      <button (click)="toggleTopmost()">
        Toggle Topmost
      </button>
      <button (click)="toggleLevel()">
        Toggle Top level 1
      </button>
    </p>
  `,
})
export class Example03 {
  readonly content = ({ $implicit }) => $implicit.text;

  readonly handler = (item) => item.children || [];

  readonly data = DATA;

  readonly map = new Map();

  toggleTopmost() {
    this.map.set(this.data, !this.map.get(this.data));
  }

  toggleLevel() {
    this.map.set(this.data.children[0], !this.map.get(this.data.children[0]));
  }
}
