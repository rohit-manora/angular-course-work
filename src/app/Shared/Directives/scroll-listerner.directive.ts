import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appScrollListerner]'
})
export class ScrollListernerDirective {

  @Output() scrolledAtBottom = new EventEmitter<void>();
  public isScrollEnd = false;
  
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight &&
      !this.isScrollEnd
    ) {
      this.isScrollEnd = true;
      this.scrolledAtBottom.emit();
    } else if (
      window.innerHeight + window.scrollY <
      document.body.scrollHeight
    ) {
      this.isScrollEnd = false;
    }
  }

}
