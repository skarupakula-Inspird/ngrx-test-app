import {Injectable} from '@angular/core';

@Injectable()
export class HeaderService {

    public headers = [
        {
            name: 'Architecture', color: '#404040', routeURL: 'architecture'
        },
        {
            name: 'Portfolio', color: '#00324b', routeURL: 'portfolio'
        }
    ];

    constructor() {
    }
}
