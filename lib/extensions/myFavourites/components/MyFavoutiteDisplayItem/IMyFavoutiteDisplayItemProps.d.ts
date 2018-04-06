import { IMyFavouriteItem } from "../../../interfaces/IMyFavouriteItem";
export interface IMyFavoutiteDisplayItemProps {
    displayItem: IMyFavouriteItem;
    deleteFavourite(favouriteItemId: number): void;
    editFavoutite(itemToBeEdited: IMyFavouriteItem): void;
}
