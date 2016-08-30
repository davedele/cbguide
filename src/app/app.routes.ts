import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { FormsComponent }  from './forms/forms.component';
import { ColorComponent }  from './color/color.component';
import { TypoComponent }  from './typo/typo.component';
import { PanelsComponent }  from './panels/panels.component';
import { TablesComponent }  from './tables/tables.component';
import { NotificationComponent }  from './notification/notification.component';
import { ButtonsComponent }  from './buttons/buttons.component';
import { GridComponent }  from './grid/grid.component';
import { MasonryComponent }  from './masonry/masonry.component';
import { OrgsComponent }  from './orgs/orgs.component';



const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'color', component: ColorComponent },
  { path: 'typo', component: TypoComponent },
  { path: 'panels', component: PanelsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'grid', component: GridComponent },
  { path: 'masonry', component: MasonryComponent },
  { path: 'orgs', component: OrgsComponent }
];


export const appRouterProviders = [
  provideRouter(routes)
];

