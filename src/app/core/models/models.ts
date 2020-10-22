import {TreeNode} from 'primeng/api';

export class EntityMap implements TreeNode {
    standardFieldData?: Field[];
    standardFields?: Array<{ key: string, value: string }>;
    customFieldData?: Field[];
    customFields?: Array<{ key: string, value: string }>;
    projectList?: string[];
    ownerEmail?: string;
    number?: string;
    dtoType?: string;
    parentNumber?: string;
    basisPlatformNo?: string;
    parentProjectNumber?: string;
    data: any;
    isLeaf?: boolean;
    expanded?: boolean;
    children?: Array<EntityMap>;
}

export class Config {
    standardFields?: Field[];
    customFields?: Field[];
    moduleName?: string;

}

export class Field {
    fieldType?: string;
    columnHeading?: string;
    popupPrompt?: string;
    dBField?: boolean;
    dataType?: string;
    showColumn?: boolean;
    columnOrder?: number;
    columnWidth?: number;
    required?: boolean;
    requiredDepedenecy?: boolean;
    inPopup?: boolean;
    inPopupDependency?: boolean;
    showInFilter?: boolean;
    treeLevel?: number;
    listSize?: number;
    editAllowed?: boolean;
    fieldValue?: string;
    hook?: boolean;
    gridEdit?: boolean;
    isJavaField?: boolean;
    isCalcuationField?: boolean;
    matchingDataProviderWithValue?: string;
    id?: number;
    moduleId?: number;
    viewID?: number;
    tabID?: number;
    parentId?: number;
    hasChild?: boolean;
    childPosition?: number;
    fieldName?: string;
    isArchived?: boolean;
    dataProvider?: boolean;
    fieldValueBKP?: string;
    isValid = true;
    errorMessage?: string;
    dataProviderFieldLIst?: Array<any>;
    dependencyFieldList?: Array<any>;
}
