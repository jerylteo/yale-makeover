import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { ExhibitionsComponent } from './pages/exhibitions/exhibitions.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { NewsComponent } from './pages/news/news.component';
import { EventsComponent } from './pages/events/events.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'exhibitions', component: ExhibitionsComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsComponent },
];
