import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-group-neutral-color-000",
  templateUrl: "./group-neutral-color-000.component.html",
  styleUrls: ["./group-neutral-color-000.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupNeutralColor000Component {
  @Input() group: "Neutral" | "Blue" | "Red" | "Orange" | "Green" | "Yellow" =
    "Neutral";
  @Input() color:
    | "000"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800" = "000";
}
