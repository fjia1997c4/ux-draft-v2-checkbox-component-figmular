import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-spacing-chips",
  templateUrl: "./spacing-chips.component.html",
  styleUrls: ["./spacing-chips.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacingChipsComponent {
  @Input() spacingSize:
    | "0px"
    | "2px"
    | "4px"
    | "6px"
    | "8px"
    | "10px"
    | "12px"
    | "16px"
    | "20px"
    | "24px"
    | "28px"
    | "32px"
    | "36px"
    | "40px"
    | "48px"
    | "60px"
    | "80px"
    | "96px"
    | "112px"
    | "120px"
    | "Spacing size22" = "0px";
}
