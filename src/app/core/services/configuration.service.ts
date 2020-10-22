import {HttpClient} from '@angular/common/http';
import {API_URL} from '../util/url.const';
import {Injectable} from '@angular/core';
import {Config} from '../models/models';

@Injectable()
export class ConfigurationService {

    private configurationMap: { [key: string]: any } = {};

    constructor(private httpClient: HttpClient) {
    }

    public getConfigurationByName(name: string) {
        return this.configurationMap[name];
    }

    getConfiguration() {
        this.httpClient.get(`${API_URL}/configuration`)
            .subscribe((configs: Array<Config>) => {
                configs.forEach(config => {
                    this.configurationMap[config.moduleName] = config;
                });
            });
    }

}
