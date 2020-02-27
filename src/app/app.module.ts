import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColumnMappingComponent } from './column-mapping/column-mapping.component';
import { FormatCrudComponent } from './format-crud/format-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnMappingComponent,
    FormatCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
