import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../core/util/url.const';
import {EntityMap} from '../../core/models/models';
import {BehaviorSubject, Subject} from 'rxjs';
import {ConfigurationService} from '../../core/services/configuration.service';
import {map} from 'rxjs/operators';
import {updateFields} from '../../core/util/config.util';
import {entityMapToTreeNodeConverter} from '../../core/util/entitymap-to-treenode.converter';

@Injectable()
export class ProjectService {
    private projects: Array<EntityMap> = [];
    public projects$: Subject<Array<EntityMap>> = new BehaviorSubject<Array<EntityMap>>([]);

    constructor(private httpClient: HttpClient,
                public configSerivce: ConfigurationService) {
    }


    getAll() {
       return this.httpClient.get(`${API_URL}/projects`)
            .pipe(map((resp: Array<EntityMap>) =>
                    updateFields(this.configSerivce.getConfigurationByName('PROJECT'), resp )),
                map((reps: Array<EntityMap>) => entityMapToTreeNodeConverter(reps)));
    }

    getByPlatform(platform: EntityMap) {
        return this.httpClient.get(`${API_URL}/projects?basisPlatformNo=${platform.number}`)
            .pipe(map((resp: Array<EntityMap>) =>
                    updateFields(this.configSerivce.getConfigurationByName('PROJECT'), resp )),
                map((reps: Array<EntityMap>) => entityMapToTreeNodeConverter(reps)));
    }
}
