import loadable, { DefaultComponent } from "@loadable/component";
import React, { ReactElement } from "react";

import ChoiceElementProps from "./ChoiceElementProps";

const ChoiceElement = loadable(
    (): Promise<DefaultComponent<ChoiceElementProps>> =>
        import(/* webpackChunkName: "ChoiceElement" */ "./ChoiceElement"),
);
const ChoiceElementLoader = (props: ChoiceElementProps): ReactElement => (
    <ChoiceElement {...props} />
);
export default ChoiceElementLoader;
