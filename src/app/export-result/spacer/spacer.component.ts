import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-spacer",
  templateUrl: "./spacer.component.html",
  styleUrls: ["./spacer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacerComponent {
  @Input() direction: "Vertical" | "Horizontal" = "Vertical";
  @Input() sizePx:
    | "4"
    | "8"
    | "10"
    | "12"
    | "16"
    | "20"
    | "24"
    | "32"
    | "40"
    | "Custom" = "4";
}
