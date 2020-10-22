import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../core/util/url.const';
import {EntityMap} from '../../core/models/models';
import {updateFields} from '../../core/util/config.util';
import {entityMapToTreeNodeConverter} from '../../core/util/entitymap-to-treenode.converter';
import {ConfigurationService} from '../../core/services/configuration.service';
import { map } from 'rxjs/operators';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlatformsService {

    private platformsList: Array<EntityMap> = [];
    public platforms$: Subject<Array<EntityMap>> = new BehaviorSubject<Array<EntityMap>>([]);

    constructor(private httpClient: HttpClient,
                public configSerivce: ConfigurationService) {
    }


    getAll() {
        return this.httpClient.get(`${API_URL}/platforms`)
            .pipe(map(
                (resp : Array<EntityMap>) =>
                updateFields(this.configSerivce.getConfigurationByName('PLATFORM'), resp )
            ),
                map((reps: Array<EntityMap>) => entityMapToTreeNodeConverter(reps)));
    }

}
