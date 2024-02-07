export interface IPostPet {
    id: string;
    category?: ICategory;
    name: string;
    photoUrls?: string[];
    tags?: ITag[];
    status?: string;
}

export interface ICategory {
    id: string;
    name: string
}

export interface ITag {
    id: string;
    name: string;
}
