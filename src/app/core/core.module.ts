import {NgModule} from '@angular/core';
import {HeaderService} from './services/header.service';
import {SimpleViewComponent} from './views/simple-view/simple-view.component';
import {TreeTableModule} from 'primeng/treetable';
import {PlatformModule} from '@angular/cdk/platform';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { SideNavViewComponent } from './views/side-nav-view/side-nav-view.component';
import {CodeMaterialModule} from '../material/code.material.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {InspirdStoreService} from './store/inspird.store';
import { PopupService } from './services/popup.service';

@NgModule({
    imports: [
        CommonModule,
        CodeMaterialModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        TreeTableModule,
        PlatformModule,
        MatSidenavModule
    ],
    exports: [
        SimpleViewComponent,
        SideNavViewComponent
    ],
    declarations: [
        SimpleViewComponent,
        SideNavViewComponent
    ],
    providers: [
        HeaderService,
        InspirdStoreService,
        PopupService
    ],
})
export class CoreModule {
}
