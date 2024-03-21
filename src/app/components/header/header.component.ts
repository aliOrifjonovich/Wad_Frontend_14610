import { Component, inject } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [MatButtonModule, MatTooltipModule],
})
export class HeaderComponent {
  router = inject(Router);
  title: string = 'E-management ';
  disableCreateButton: boolean = false;

  ngOnInit() {
    this.router.events.subscribe(() => {
      // Get the current route path
      const currentRoute = this.router.url;
      // Check if the current route path matches 'participants' or 'events'
      console.log(currentRoute);

      this.disableCreateButton = !(
        currentRoute.includes('/participants') ||
        currentRoute.includes('/events')
      );
    });
  }
  toggleAddTask() {
    console.log('add');
  }
  btnClick(name: string) {
    this.router.navigateByUrl(name);
  }
}
