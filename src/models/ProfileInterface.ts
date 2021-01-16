import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";

export interface PaymentOptionsType {
    key: string,
    value: string,
    text: string
}

export interface ProfileTabType {
    id: string,
    title: string,
    icon: SemanticICONS,
    component: JSX.Element
}