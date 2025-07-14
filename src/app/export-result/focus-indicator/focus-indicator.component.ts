import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-focus-indicator",
  templateUrl: "./focus-indicator.component.html",
  styleUrls: ["./focus-indicator.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FocusIndicatorComponent {}
