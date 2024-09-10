import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet /> <p>Teste</p>`,
})
export class AppComponent {
  title = 'curso-angular-lista-de-tarefas';
}
