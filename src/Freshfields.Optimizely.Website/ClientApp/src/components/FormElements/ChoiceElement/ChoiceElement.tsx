import React, { ReactElement } from "react";

import Checkbox from "components/Checkbox";
import Radio from "components/Radio";

import ChoiceElementProps from "./ChoiceElementProps";

const ChoiceElement = (props: ChoiceElementProps): ReactElement => {
    return (props.allowMultiSelect && props.allowMultiSelect == true) ||
        props.items?.length === 1 ? (
        <Checkbox {...props} />
    ) : (
        <Radio {...props} />
    );
};

export default React.memo(ChoiceElement);
