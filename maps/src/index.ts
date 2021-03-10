import User from "./User";
import Company from "./Company";
import CustomMap from "./CustomMap";

const user = new User();
console.log("Generated user", user);

const company = new Company();
console.log("Generated company", company);

const map = new CustomMap(document.getElementById("mapid"));
map.addMarker(user);
map.addMarker(company);
