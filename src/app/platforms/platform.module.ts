import {NgModule} from '@angular/core';
import {PlatformsListComponent} from './components/platforms-list/platforms-list.component';
import {CoreModule} from '../core/core.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import { PlatformsService } from './service/platforms.service';
import * as fromReducer from './store/platform.reducers';
import * as fromEffects from './store/platform.effects';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
    imports: [
        CoreModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forFeature(fromReducer.PLATFORM_KEY,  fromReducer.reducer),
        EffectsModule.forFeature([fromEffects.PlatfromEffects])
    ],
    exports: [],
    declarations: [PlatformsListComponent],
    providers: [PlatformsService],
})
export class PlatformModule {
}
