import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EntityMap, Field} from '../../models/models';
import {Observable} from 'rxjs';
import {TreeNode} from 'primeng/api';

@Component({
    selector: 'app-simple-view',
    templateUrl: './simple-view.component.html',
    styleUrls: ['./simple-view.component.css']
})
export class SimpleViewComponent implements OnInit {

    selectedNode: EntityMap;

    @Input()
    rows: Observable<Array<EntityMap>> = new Observable<Array<EntityMap>>(null);
    @Input()
    columns: Observable<Array<Field>> = new Observable<Array<Field>>();

    @Output()
    nodeSelected: EventEmitter<EntityMap> = new EventEmitter<EntityMap>();

    selectionChange(evnt) {
        this.nodeSelected.emit(this.selectedNode);
    }

    ngOnInit(): void {
    }


}
