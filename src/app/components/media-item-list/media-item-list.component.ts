import { Component, OnInit } from '@angular/core';
import { MediaItemsService } from 'src/app/services/media-items.service';

@Component({
	selector: 'app-media-item-list',
	templateUrl: './media-item-list.component.html',
	styleUrls: [
		'./media-item-list.component.css',
	]
})
export class MediaItemListComponent implements OnInit {
	public mediaItems = null;

	constructor(
		private mediaItemsService: MediaItemsService,
	) {}

	ngOnInit(): void {
		this.mediaItems = this.mediaItemsService.getMediaItems();
	}

	onMediaItemDelete(mediaItem): void {
		this.mediaItemsService.deleteMediaItem(mediaItem);
	}
}
