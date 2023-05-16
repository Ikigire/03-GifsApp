import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'shared-lazy-image',
    templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {
    @Input()
    url!: string;
    @Input()
    alt!: string;

    @Input()
    width: number;
    @Input()
    height: number;

    hasLoaded: boolean = false;

    constructor() { 
        this.width = 100;
        this.height = 100;
    }

    ngOnInit(): void { 
        if( !this.url ) throw new Error("URL is required!");
        if( !this.alt ) throw new Error("Alter title is required!");        
    }

    onLoad(): void {
        setTimeout(() => {
            this.hasLoaded = true;
        }, 1000)
    }
}
