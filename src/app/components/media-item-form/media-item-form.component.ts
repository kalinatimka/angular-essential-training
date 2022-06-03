import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lookupListsToken } from 'src/app/providers/providers';
import { MediaItemsService } from 'src/app/services/media-items.service';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
	form: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private mediaItemService: MediaItemsService,
		@Inject(lookupListsToken)
		public lookupList,
	) {}

	public ngOnInit(): void {
		this.form = this.formBuilder.group({
			medium: this.formBuilder.control('Movies'),
			name: this.formBuilder.control('', Validators.compose([
				Validators.required,
				Validators.pattern('[\\w\\-\\s\\/]+'),
			])),
			category: this.formBuilder.control(''),
			year: this.formBuilder.control(''),
		});
	}

	public onSubmit(mediaItem): void {
		this.mediaItemService.addMediaItem(mediaItem);
	}
}
