import { CategorieDto } from "./categorie-dto";
import { ImageDto } from "./image-dto";
import { FermierDto } from "./fermier-dto";
export class Article {
    "id":string;
    "nom":string;
    "description":string;
    "prixU":number;
    "quantite":number;
    "categorieDto":CategorieDto;
    "imageDto":ImageDto;
    "fermierDto":FermierDto;
}
