"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
cucumber_1.Before({ tags: '@regression' }, function () {
    console.log('This is a regression scenario');
});
//# sourceMappingURL=hooks.js.map