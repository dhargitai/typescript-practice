/* 
Simple blog

user
post

*/

import { User } from "./user";

const sutyi = User.build({ id: 2 });
sutyi.fetch().then(() => {
  sutyi.set({ age: 44 });
  sutyi.save();

  console.log(sutyi);
});

sutyi.subscribe("fetch", () => {
  console.log("sutyika fetched!", JSON.stringify(sutyi.getAll(), null, 2));
});
sutyi.subscribe("change", () => {
  console.log("sutyika edited!", JSON.stringify(sutyi.getAll(), null, 2));
});
sutyi.subscribe("save", () => {
  console.log("sutyika saved!", JSON.stringify(sutyi.getAll(), null, 2));
});

import { Post } from "./post";

const first = Post.build({ id: 1 });
first.fetch().then(() => {
  first.set({ content: "other content" });
  first.save();

  console.log(first);
});

first.subscribe("fetch", () => {
  console.log("first post fetched!", JSON.stringify(first.getAll(), null, 2));
});
first.subscribe("change", () => {
  console.log("first post edited!", JSON.stringify(first.getAll(), null, 2));
});
first.subscribe("save", () => {
  console.log("first post saved!", JSON.stringify(first.getAll(), null, 2));
});
