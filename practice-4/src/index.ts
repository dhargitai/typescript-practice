/* 
Simple blog

user
post

*/

import { User } from "./user";

const sutyi = new User({ id: 2 });
sutyi.fetch().then(() => {
  sutyi.set({ age: 11 });
  sutyi.save();

  console.log(sutyi);
});

sutyi.subscribe("fetch", () => {
  console.log(
    "sutyika fetched!",
    JSON.stringify(sutyi.attributes.getAll(), null, 2)
  );
});
sutyi.subscribe("change", () => {
  console.log(
    "sutyika edited!",
    JSON.stringify(sutyi.attributes.getAll(), null, 2)
  );
});
sutyi.subscribe("save", () => {
  console.log(
    "sutyika saved!",
    JSON.stringify(sutyi.attributes.getAll(), null, 2)
  );
});
