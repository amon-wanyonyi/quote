import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { HighlightDirective } from './highlight.directive';
import { DeleteComponent } from './delete/delete.component';
import { VoteComponent } from './vote/vote.component';
import { FormsModule } from '@angular/forms';
import { CounterPipe } from './counter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DetailsComponent,
    HighlightDirective,
    DeleteComponent,
    VoteComponent,
    CounterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
