import { User } from "./User";
import { CustomMap } from "./CustomMap";
import { Company } from "./Companies";
const view = document.getElementById("view");

const user = new User();
const company = new Company();
const map = new CustomMap(view);
map.addMarker(user)
map.addMarker(company)
