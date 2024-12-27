import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}
  
  title = 'SCRUMPoker';

  public switchTheme(): void {
    // this.renderer.addClass(this.document.documentElement, 'dark-mode');

    const htmlElement = this.document.documentElement;
    // Toggle between 'light-mode' and 'dark-mode'
    if (htmlElement.classList.contains('dark-mode')) {
      this.renderer.removeClass(htmlElement, 'dark-mode');
      this.renderer.addClass(htmlElement, 'light-mode');
    } else {
      this.renderer.removeClass(htmlElement, 'light-mode');
      this.renderer.addClass(htmlElement, 'dark-mode');
    }
  }
}
