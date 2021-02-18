import { Before } from "cucumber";

Before({ tags: "@regression" }, function () {
  console.log("This is a regression scenario");
});
