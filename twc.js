const { clsx } = require("clsx");
const { twMerge } = require("tailwind-merge");


 function twc(...input) {
    return twMerge(clsx(...input));
}

module.exports = twc;