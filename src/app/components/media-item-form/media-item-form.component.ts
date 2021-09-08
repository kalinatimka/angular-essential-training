import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
	form: FormGroup;

	public ngOnInit(): void {
		this.form = new FormGroup({
			medium: new FormControl('Movies'),
			name: new FormControl(''),
			category: new FormControl(''),
			year: new FormControl(''),
		});
	}

	public onSubmit(mediaItem: any): void {
		console.log(mediaItem);
	}
}
