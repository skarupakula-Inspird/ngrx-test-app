import {createSelector} from '@ngrx/store';
import PlatformState from './platform.state';
import AppState from '../../core/store/app.state';
import ProjectState from 'src/app/projects/store/project.state';
import * as _ from 'lodash';
import { EntityMap } from 'src/app/core/models/models';

export const platforms = (state: AppState) => state.platforms;
export const projects = (state: AppState) => state.projects;

export const selectAllPlatforms = createSelector(
    platforms,
    (state: PlatformState) => state.platforms
);


export const selectAllProjects = createSelector(
    projects,
    (state: ProjectState) => state.projects
);


const LABOR_COST = {
    "fieldType": "STANDARD_FIELD",
    "columnHeading": "Labor Budget",
    "popupPrompt": "Labor Budget",
    "dBField": true,
    "dataType": "Cost",
    "showColumn": true,
    "columnOrder": 31,
    "columnWidth": 8,
    "required": true,
    "requiredDepedenecy": true,
    "inPopup": true,
    "inPopupDependency": false,
    "showInFilter": true,
    "treeLevel": 0,
    "listSize": 0,
    "editAllowed": true,
    "hook": false,
    "gridEdit": false,
    "isJavaField": false,
    "isCalcuationField": true,
    "dependencyFieldList": [
        {
            "fieldId": 59,
            "type": 0,
            "dependencyFieldID": 39,
            "dependencyFieldValue": 3,
            "dependencyFieldOperator": ">=",
            "dependencyJoinOperator": "1"
        }
    ],
    "matchingDataProviderWithValue": "",
    "id": 59,
    "moduleId": 1,
    "viewID": 1,
    "tabID": 2,
    "parentId": 58,
    "hasChild": false,
    "childPosition": 1,
    "fieldName": "COSTS_LIST[1]",
    "isArchived": false,
    "dataProvider": false,
    "dataProviderFieldLIst": [],
    "fieldValue": "",
    "isValid": true,
    "errorMessage": ""
};
const CAPITAL_COST = {
        "fieldType": "STANDARD_FIELD",
        "columnHeading": "Capital Budget",
        "popupPrompt": "Capital Budget",
        "dBField": true,
        "dataType": "Cost",
        "showColumn": true,
        "columnOrder": 32,
        "columnWidth": 8,
        "required": false,
        "requiredDepedenecy": false,
        "inPopup": true,
        "inPopupDependency": false,
        "showInFilter": true,
        "treeLevel": 0,
        "listSize": 0,
        "editAllowed": true,
        "hook": false,
        "gridEdit": false,
        "isJavaField": false,
        "isCalcuationField": true,
        "matchingDataProviderWithValue": "",
        "id": 63,
        "moduleId": 1,
        "viewID": 1,
        "tabID": 2,
        "parentId": 58,
        "hasChild": false,
        "childPosition": 2,
        "fieldName": "COSTS_LIST[2]",
        "isArchived": false,
        "dataProvider": false,
        "dataProviderFieldLIst": [],
        "fieldValue": "",
        "isValid": true,
        "errorMessage": ""
    };

export const summerizedPlatforms = createSelector(
    selectAllPlatforms,selectAllProjects, 
    (platforms, projects) => {
    }
);

export const selectedPlatform = createSelector(
    platforms,
    (state: PlatformState) => state.selectedPlatform ? state.platforms[state.selectedPlatform] : null
);
