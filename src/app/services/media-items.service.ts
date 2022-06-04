import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

export interface MediaItem {
	id: number;
	name: string;
	medium: string;
	category: string,
	year: number;
	watchedOn: number;
	isFavorite: boolean;
}

export interface MediaItemResponse {
	mediaItems: MediaItem[];
}

@Injectable({
	providedIn: 'root',
})
export class MediaItemsService {
	constructor(
		private http: HttpClient,
	) {}

	public getMediaItems(medium: string): Observable<MediaItem[]> {
		const options = { params: { medium } };
		return this.http.get<MediaItemResponse>('mediaitems', options).pipe(
			map((response) => response.mediaItems),
			catchError(this.handleError),
		);
	}

	public addMediaItem(mediaItem: MediaItem): Observable<unknown> {
		return this.http.post('mediaitems', mediaItem).pipe(
			catchError(this.handleError),
		);
	}

	public deleteMediaItem(mediaItem: MediaItem): Observable<unknown> {
		return this.http.delete(`mediaitems/${mediaItem.id}`).pipe(
			catchError(this.handleError),
		);
	}

	private handleError(error: HttpErrorResponse) {
		console.log(error.message);
		return throwError('A data error occured, please try again.');
	}
}
