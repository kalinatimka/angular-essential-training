import { RouterModule, Routes } from "@angular/router";
import { MediaItemFormComponent } from "./media-item-form.component";

const newItemRoutes: Routes = [
	{
		path: 'add',
		component: MediaItemFormComponent,
	}
];

export const NewItemRouting = RouterModule.forChild(newItemRoutes)
