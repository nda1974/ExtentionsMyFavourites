/// <reference types="react" />
import * as React from "react";
import { IMyFavoutiteDisplayItemProps } from "./IMyFavoutiteDisplayItemProps";
import { IMyFavoutiteDisplayItemState } from "./IMyFavoutiteDisplayItemState";
export default class MyFavoutiteDisplayItem extends React.Component<IMyFavoutiteDisplayItemProps, IMyFavoutiteDisplayItemState> {
    constructor(props: IMyFavoutiteDisplayItemProps);
    render(): React.ReactElement<IMyFavoutiteDisplayItemProps>;
    private _deleteFavourite();
    private _editFavourite();
}
