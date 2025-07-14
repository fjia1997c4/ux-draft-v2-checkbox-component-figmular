import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-radius",
  templateUrl: "./radius.component.html",
  styleUrls: ["./radius.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadiusComponent {
  @Input() radiusSize: "4px" | "8px" | "12px" | "20px" | "60px" = "4px";
}
