import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {EntityMap, Field} from '../../models/models';

@Component({
  selector: 'app-side-nav-view',
  templateUrl: './side-nav-view.component.html',
  styleUrls: ['./side-nav-view.component.css']
})
export class SideNavViewComponent implements OnInit {

  sideNavSelectedNode: EntityMap = null;
  selectedNode: EntityMap = null;

  @Input()
  sideNavRows: Observable<Array<EntityMap>> = new Observable<Array<EntityMap>>(null);
  @Input()
  sideNavcolumns: Observable<Array<Field>> = new Observable<Array<Field>>();

  @Input()
  rows: Observable<Array<EntityMap>> = new Observable<Array<EntityMap>>(null);
  @Input()
  columns: Observable<Array<Field>> = new Observable<Array<Field>>();

  @Output()
  sideNavNodeSelection: EventEmitter<EntityMap> = new EventEmitter<EntityMap>();

  @Output()
  nodeSelection: EventEmitter<EntityMap> = new EventEmitter<EntityMap>();


  constructor() { }

  ngOnInit(): void {
  }

  emitToParent(selectedNode: EntityMap, selection: EventEmitter<EntityMap>) {
    selection.emit(selectedNode);
  }

  selectNode(selectedNode: EntityMap) {
    this.selectedNode = selectedNode;
    this.emitToParent(selectedNode, this.nodeSelection);
  }

  selectSidenavNode(selectedNode: EntityMap) {
    this.sideNavSelectedNode = selectedNode;
    this.emitToParent(selectedNode, this.sideNavNodeSelection);
  }
}
