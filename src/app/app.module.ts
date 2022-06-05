import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { MediaItemListComponent } from './components/media-item-list/media-item-list.component';
import { FavoriteDirective } from './directives/favorite.directive';
import { MediaItemFormComponent } from './components/media-item-form/media-item-form.component';
import { lookupLists, lookupListsToken } from './providers/providers';
import { MockXHRBackend } from './mock-backend/mock-xhr-backend';
import { Routing } from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpClientModule,
		Routing,
	],
	declarations: [
		AppComponent,
		MediaItemComponent,
		MediaItemListComponent,
		MediaItemFormComponent,
		FavoriteDirective,
	],
	providers: [
		{
			provide: lookupListsToken,
			useValue: lookupLists,
		},
		{
			provide: HttpXhrBackend,
			useClass: MockXHRBackend,
		}
	],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule {}
