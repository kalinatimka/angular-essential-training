import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
		private activatedRoute: ActivatedRoute,
	) {}

	public ngOnInit(): void {
		this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
			let medium = paramMap.get('medium');
			if (medium.toLowerCase() === 'all') {
				medium = '';
			}
			this.getMediaItems(medium);
		});
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
