import { Directive, ElementRef, OnInit, Input, Renderer, HostListener } from '@angular/core';

@Directive({
	selector: '[focus]'
})
export class FocusDirective implements OnInit {
	@Input() focus: boolean;

	constructor(public el: ElementRef, public renderer: Renderer) {

	}

	@HostListener("keypress", ["$event"])
	public onKeypressDown(event: KeyboardEvent) {
		if(event.keyCode == 13)
			this.el.nativeElement.blur();
	}

	ngOnInit() {
		console.log(this.focus)
		if(this.focus) 
			this.el.nativeElement.focus();
	}

}