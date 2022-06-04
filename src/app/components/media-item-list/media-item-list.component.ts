import { Component, OnInit } from '@angular/core';
import { MediaItem, MediaItemsService } from 'src/app/services/media-items.service';

@Component({
	selector: 'app-media-item-list',
	templateUrl: './media-item-list.component.html',
	styleUrls: ['./media-item-list.component.css'],
})
export class MediaItemListComponent implements OnInit {
	public mediaItems = null;
	public medium = '';

	constructor(
		private mediaItemsService: MediaItemsService,
	) {}

	public ngOnInit(): void {
		this.getMediaItems(this.medium);
	}

	public onMediaItemDelete(mediaItem: MediaItem): void {
		this.mediaItemsService.deleteMediaItem(mediaItem).subscribe(() => {
			this.getMediaItems(this.medium);
		});
	}

	public getMediaItems(medium: string): void {
		this.medium = medium;
		this.mediaItemsService.getMediaItems(medium).subscribe((mediaItems: MediaItem[]) => {
			this.mediaItems = mediaItems;
		});
	}
}
