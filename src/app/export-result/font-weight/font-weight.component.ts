import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-font-weight",
  templateUrl: "./font-weight.component.html",
  styleUrls: ["./font-weight.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FontWeightComponent {
  @Input() weight:
    | "Bold"
    | "Regular"
    | "Italic"
    | "Bold underline"
    | "Underline" = "Bold";
}
