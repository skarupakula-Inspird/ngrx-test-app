import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from './core/services/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'myapp';

  constructor(public configService: ConfigurationService) {
  }

  ngOnInit(): void {
    this.configService.getConfiguration();
  }
}
