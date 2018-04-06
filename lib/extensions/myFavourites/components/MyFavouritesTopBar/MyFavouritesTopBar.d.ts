/// <reference types="react" />
import * as React from "react";
import { IMyFavouritesTopBarProps } from "./IMyFavouritesTopBarProps";
import { IMyFavouritesTopBarState } from "./IMyFavouritesTopBarState";
import { IMyFavouriteItem } from "../../../interfaces/IMyFavouriteItem";
export default class MyFavouritesTopBar extends React.Component<IMyFavouritesTopBarProps, IMyFavouritesTopBarState> {
    private _self;
    private _MyFavouritesServiceInstance;
    private _MyFavouriteItems;
    constructor(props: IMyFavouritesTopBarProps);
    render(): React.ReactElement<IMyFavouritesTopBarProps>;
    deleteFavourite(favouriteItemId: number): Promise<void>;
    editFavourite(favouriteItem: IMyFavouriteItem): void;
    private _getMyFavourites();
    private _saveMyFavourite();
    private _showMenu();
    private _hideMenu();
    private _showDialog();
    private _hideDialog();
    private _onRenderCell(myFavouriteItem, index);
    private _onFilterChanged(text);
    private _setTitle(value);
    private _setDescription(value);
}
