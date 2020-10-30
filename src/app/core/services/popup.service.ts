import {Injectable} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Injectable()
export class PopupService {

    constructor(public dialog: MatDialog) {
    }

    open(component, data = {}) {
        const dialogRef = this.dialog.open(component, data);
        return dialogRef;
    }




}
