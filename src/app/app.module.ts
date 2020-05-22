import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/header/header.component";
import { FelipeLinaresComponent } from "./features/felipe-linares/felipe-linares.component";
import { UxDesignComponent } from "./features/ux-design/ux-design.component";
import { DataVisualizationComponent } from "./features/data-visualization/data-visualization.component";
import { FrontDevComponent } from "./features/front-dev/front-dev.component";
import { FormComponent } from "./features/form/form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FelipeLinaresComponent,
    UxDesignComponent,
    DataVisualizationComponent,
    FrontDevComponent,
    FormComponent,
    FooterComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
