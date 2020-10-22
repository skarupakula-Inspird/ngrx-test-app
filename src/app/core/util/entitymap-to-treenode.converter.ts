import {EntityMap, Field} from '../models/models';

export function entityMapToTreeNodeConverter(entities: Array<EntityMap>) {

    entities.map(entity => {
        const data = {};
        Object.assign(data, entity.standardFields);
        Object.assign(data, entity.customFields);
        entity.data = data;
    });
    return entities;
}

export function getAllVisibleFields(entity: EntityMap) {

    if (!entity || Object.keys(entity).length <= 0) {
        return [];
    }

    return entity.standardFieldData
        .concat(entity.customFieldData)
        .sort((field1, field2) => field1.columnOrder - field2.columnOrder)
        .filter(field => field.showColumn && field.columnHeading != 'Attachment');

}
