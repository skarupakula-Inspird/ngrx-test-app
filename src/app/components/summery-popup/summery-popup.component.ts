import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EntityMap, Field } from '../../core/models/models';
import { getAllVisibleFields } from '../../core/util/entitymap-to-treenode.converter';

@Component({
  selector: 'app-summery-popup',
  templateUrl: './summery-popup.component.html',
  styleUrls: ['./summery-popup.component.css']
})
export class SummeryPopupComponent implements OnInit {

  selectedNode: EntityMap;

  rows$: Observable<Array<EntityMap>> = new Observable<Array<EntityMap>>(null);
  columns$: Observable<Array<Field>> = new Observable<Array<Field>>();


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

        this.rows$ = data.rows$;
        this.columns$ = data.rows$.pipe(
            map((entities: Array<EntityMap>) => {
              if (entities && entities.length > 0) {
                return getAllVisibleFields(entities[0])
                    .filter(field => field.showColumn && field.columnHeading != 'Attachment')
                    .sort((field1, field2) => field1.columnOrder - field2.columnOrder);
              }
            })
        );
  }

  ngOnInit(): void {
  }

}
