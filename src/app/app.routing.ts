import { RouterModule, Routes } from "@angular/router";
import { MediaItemListComponent } from "./components/media-item-list/media-item-list.component";

const appRoutes: Routes = [
	{
		path: ':medium',
		component: MediaItemListComponent,
	},
	{
		path: '',
		redirectTo: 'all',
		pathMatch: 'full',
	},
];

export const Routing  = RouterModule.forRoot(appRoutes);
