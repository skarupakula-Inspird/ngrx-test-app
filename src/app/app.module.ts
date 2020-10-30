import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {HeaderComponent} from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {ProjectModule} from './projects/project.module';
import {TreeTableModule} from 'primeng/treetable';
import {ConfigurationService} from './core/services/configuration.service';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {PlatformModule} from './platforms/platform.module';
import {EffectsModule} from '@ngrx/effects';
import { SummeryPopupComponent } from './components/summery-popup/summery-popup.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        SummeryPopupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: false,
            features: {
                pause: false,
                lock: true,
                persist: true
            }
        }),
        AppRoutingModule,
        CoreModule,
        PlatformModule,
        ProjectModule,
        BrowserAnimationsModule,
        TreeTableModule
    ],
    providers: [ConfigurationService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
