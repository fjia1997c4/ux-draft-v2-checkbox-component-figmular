import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-v-2-checkbox",
  templateUrl: "./v-2-checkbox.component.html",
  styleUrls: ["./v-2-checkbox.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V2CheckboxComponent {
  @Input() text: string = "Text";
  @Input() type: "Enabled" | "Disabled" | "Error" = "Enabled";
  @Input() selected: "True" | "False" = "False";
  @Input() state: "Default" | "Hover" | "Pressed" = "Default";
}
