import { Component } from '@angular/core';
import { TreeItemContentComponent } from './tree/components/tree-item-content/tree-item-content.component';

@Component({
  template: `
    <img width="32" height="32" [src]="icon">
    <ng-container *ngTemplateOutlet="context.template"></ng-container>
  `,
  styleUrls: ['folder.component.less'],
  host: {
    '(click)': 'onClick()',
  },
})
export class FoldersComponent extends TreeItemContentComponent {
  get icon(): string {
    return this.isExpandable ? FOLDER : DOCUMENT;
  }
}

const DOCUMENT =
  'https://icons.iconarchive.com/icons/papirus-team/papirus-mimetypes/512/x-office-document-icon.png';
const FOLDER =
  'https://icons-for-free.com/iconfiles/png/512/folder-131964753094019398.png';
