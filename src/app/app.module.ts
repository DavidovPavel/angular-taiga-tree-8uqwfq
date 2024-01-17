import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Example01 } from './example-01';
import { Example02 } from './example-02';
import { Example03 } from './example-03';
import { Example04 } from './example-04';
import { Example05 } from './example-05';
import { FoldersComponent } from './folder.component';
import { TreeModule } from './tree/tree.module';

@NgModule({
  imports: [BrowserModule, TreeModule],
  declarations: [
    AppComponent,
    FoldersComponent,
    Example01,
    Example02,
    Example03,
    Example04,
    Example05,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
