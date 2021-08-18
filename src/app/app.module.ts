import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { MediaItemListComponent } from './components/media-item-list/media-item-list.component';
import { FavoriteDirective } from './directives/favorite.directive';

@NgModule({
	imports: [
		BrowserModule,
	],
	declarations: [
		AppComponent,
		MediaItemComponent,
		MediaItemListComponent,
		FavoriteDirective,
	],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule {}
