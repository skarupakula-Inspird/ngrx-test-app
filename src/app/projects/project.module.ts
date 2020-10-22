import {NgModule} from '@angular/core';
import {ProjectService} from './service/project.service';
import { ProjectListComponent } from './components/project-list/project-list.component';
import {CoreModule} from '../core/core.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as fromReducer from './store/project.reducers';
import * as fromEffects from './store/project.effects';

@NgModule({
    imports: [
        CoreModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forFeature(fromReducer.PROJECT_KEY,  fromReducer.reducer),
        EffectsModule.forFeature([fromEffects.ProjectEffects])
    ],
    exports: [],
    declarations: [ProjectListComponent],
    providers: [ProjectService],
})
export class ProjectModule {
}
