import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-system-text-blocks",
  templateUrl: "./system-text-blocks.component.html",
  styleUrls: ["./system-text-blocks.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SystemTextBlocksComponent {
  @Input() type: "header" | "logo" | "subheader" | "title" = "logo";
}
