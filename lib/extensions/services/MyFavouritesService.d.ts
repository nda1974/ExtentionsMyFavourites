import { IMyFavoutitesService } from "./IMyFavouritesService";
import { IMyFavouritesTopBarProps } from "../myFavourites/components/MyFavouritesTopBar/IMyFavouritesTopBarProps";
import { IMyFavouriteItem } from "../interfaces/IMyFavouriteItem";
export declare class MyFavouritesService implements IMyFavoutitesService {
    private _context;
    private _props;
    private _currentWebUrl;
    private _sessionStorageKey;
    constructor(_props: IMyFavouritesTopBarProps);
    getMyFavourites(tryFromCache: boolean): Promise<IMyFavouriteItem[]>;
    saveFavourite(favouriteItem: IMyFavouriteItem): Promise<boolean>;
    deleteFavourite(favouriteItemId: number): Promise<boolean>;
    updateFavourite(favouriteItem: IMyFavouriteItem): Promise<boolean>;
    private _fetchFromSessionStorge();
    private _fetchFromSPList();
    private _fetchFromSPList2();
    private _getUserId();
}
