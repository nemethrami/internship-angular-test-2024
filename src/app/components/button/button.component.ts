import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() isDisabled: boolean = false;
  @Input() iconClass!: string;

  @Output()
  somethingHappend: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    this.somethingHappend.emit();
  }

}
