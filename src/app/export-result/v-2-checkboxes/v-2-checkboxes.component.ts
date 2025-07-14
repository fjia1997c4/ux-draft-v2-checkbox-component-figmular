import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-v-2-checkboxes",
  templateUrl: "./v-2-checkboxes.component.html",
  styleUrls: ["./v-2-checkboxes.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V2CheckboxesComponent {
  text: string = 'Text';
}
