import { Routes } from '@angular/router';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';

export const routes: Routes = [
    { path: '', component: WelcomeScreenComponent }, // Default route
    {
        path: 'rooms',
        loadChildren: () => import('./components/room-list/room-list.routes').then(m => m.routes),
      }, // Lazy-loaded standalone component
      {
        path: 'create',
        loadChildren: () => import('./components/create-room/create-room.routes').then(m => m.routes),
      }, // Lazy-loaded standalone component
];
