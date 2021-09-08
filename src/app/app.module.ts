import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { MediaItemListComponent } from './components/media-item-list/media-item-list.component';
import { FavoriteDirective } from './directives/favorite.directive';
import { MediaItemFormComponent } from './components/media-item-form/media-item-form.component';

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
	],
	declarations: [
		AppComponent,
		MediaItemComponent,
		MediaItemListComponent,
		MediaItemFormComponent,
		FavoriteDirective,
	],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule {}
