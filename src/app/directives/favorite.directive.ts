import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[appFavorite]',
})
export class FavoriteDirective {
	@HostBinding('class.is-favorite') isFavorite = true;
	@HostBinding('class.is-favorite-hovering') hovering = false;

	@HostListener('mouseenter') onMouseEnter(): void {
		this.hovering = true;
	}
	@HostListener('mouseleave') onMouseLeave(): void {
		this.hovering = false;
	}

	@Input() set appFavorite(value: boolean) {
		this.isFavorite = value;
	}
}
