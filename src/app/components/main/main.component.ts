import {Component, OnInit} from '@angular/core';
import {EntityMap, Field} from '../../core/models/models';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    files: EntityMap[] = [];
    columns: Array<{field: string, header: string}> = [];

    constructor() {
    }

    ngOnInit(): void {

    }

}
