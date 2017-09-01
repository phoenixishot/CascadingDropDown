import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { CascadingDropDownComponent } from './cascading-drop-down/cascading-drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    SubCategoryComponent,
    CascadingDropDownComponent
  ],
  imports: [
      BrowserModule,
      ReactiveFormsModule,
      CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
