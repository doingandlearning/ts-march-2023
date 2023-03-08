import { photos } from "./photos.json";
import { Photo as IPhoto } from "./photo";
// tsc --init
// resolveJsonModule: true  ~~~ l 38

const photo: IPhoto = photos[0];
console.log(photo, typeof photo);

// true, false, archived, pending, deleted
type completedState = true | false | "archived" | "pending" | "deleted";
