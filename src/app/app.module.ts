import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { V2CheckboxesComponent } from "./export-result/v-2-checkboxes/v-2-checkboxes.component";
import { V2CheckboxComponent } from "./export-result/v-2-checkbox/v-2-checkbox.component";
import { SpacingChipsComponent } from "./export-result/spacing-chips/spacing-chips.component";
import { RadiusComponent } from "./export-result/radius/radius.component";
import { FontWeightComponent } from "./export-result/font-weight/font-weight.component";
import { GroupNeutralColor000Component } from "./export-result/group-neutral-color-000/group-neutral-color-000.component";
import { SpacerComponent } from "./export-result/spacer/spacer.component";
import { SystemTextBlocksComponent } from "./export-result/system-text-blocks/system-text-blocks.component";
import { FocusIndicatorComponent } from "./export-result/focus-indicator/focus-indicator.component";
import { CheckboxComponent } from "./export-result/checkbox/checkbox.component";
import { FeatherIconsCheckComponent } from "./export-result/feather-icons-check/feather-icons-check.component";
@NgModule({
  declarations: [
    AppComponent,
    V2CheckboxesComponent,
    V2CheckboxComponent,
    SpacingChipsComponent,
    RadiusComponent,
    FontWeightComponent,
    GroupNeutralColor000Component,
    SpacerComponent,
    SystemTextBlocksComponent,
    FocusIndicatorComponent,
    CheckboxComponent,
    FeatherIconsCheckComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
