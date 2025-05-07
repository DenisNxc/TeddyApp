import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { provideHttpClient } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
