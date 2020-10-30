import {EntityMap} from '../models/models';

export function updateFields(configuration, list: Array<EntityMap>) {

    const configurationMapByFieldName = getConfigFieldMapByFieldName(configuration.standardFields.concat(configuration.customFields));

    return list.map((listItem: EntityMap) => {

        const standardFieldMap = listItem.standardFields || [];
        const customFieldMap = listItem.customFields || [];
        listItem.standardFieldData = Object.keys(standardFieldMap).map(key => {
            const configField = Object.assign({}, configurationMapByFieldName[key]);
            configField.fieldValue = standardFieldMap[key];
            configField.isValid = true;
            configField.errorMessage = '';
            return configField;
        });
        listItem.customFieldData = Object.keys(customFieldMap).map(key => {
            const configField = Object.assign({}, configurationMapByFieldName[key]);
            configField.fieldValue = customFieldMap[key];
            configField.isValid = true;
            configField.errorMessage = '';
            return configField;
        });
        
        return listItem;
    });
}

function getConfigFieldMapByFieldName(configurationFieldList) {
    const configurationFieldMap = {};

    configurationFieldList = configurationFieldList || [];

    configurationFieldList.forEach(configurationField => {
        configurationFieldMap[configurationField['fieldName']] = configurationField;
    });
    return configurationFieldMap;
}
