export default interface EpiElementDependency {
    action?: {
        displayName?: string;
        name?: string;
        order?: number;
        clientsideAction?: EpiDependencyAction;
    };
    conditionCombination?: EpiConditionCombination;
    conditions: EpiCondition[];
}

export interface EpiCondition {
    fieldName: string;
    operator: EpiConditionOperator;
    fieldValue: string;
}

export enum EpiConditionCombination {
    All = "All",
    Any = "Any",
}

export enum EpiDependencyAction {
    Hide = "hide",
    Show = "show",
}

export enum EpiConditionOperator {
    NotApplicable = "NotApplicable",
    MatchRegularExpression = "MatchRegularExpression",
    Equals = "Equals",
    NotEquals = "NotEquals",
    Contains = "Contains",
    NotContains = "NotContains",
}
