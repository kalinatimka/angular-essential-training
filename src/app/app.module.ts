import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { MediaItemListComponent } from './components/media-item-list/media-item-list.component';
import { FavoriteDirective } from './directives/favorite.directive';
import { lookupLists, lookupListsToken } from './providers/providers';
import { MockXHRBackend } from './mock-backend/mock-xhr-backend';
import { Routing } from './app.routing';
import { NewItemModule } from './modules/new-item/new-item.module';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		NewItemModule,
		Routing,
	],
	declarations: [
		AppComponent,
		MediaItemComponent,
		MediaItemListComponent,
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
