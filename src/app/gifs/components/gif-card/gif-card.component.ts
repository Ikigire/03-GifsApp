import { Component, OnInit, Input } from '@angular/core';
import { Gif } from '../../interfaces/SearchGifsResponse.interface';

@Component({
    selector: 'gif-card',
    templateUrl: './gif-card.component.html',
    styleUrls: ['./gif-card.component.css']
})
export class GifCardComponent implements OnInit {
    @Input() gif!: Gif;

    constructor() { }

    ngOnInit(): void { 
        if ( !this.gif ) {
            throw new Error("GIF is required");
        }
    }
}
