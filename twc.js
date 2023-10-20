const { clsx } = require("clsx");
const { twMerge } = require("tailwind-merge");


 function twc(...inputs) {
    return twMerge(clsx(inputs));
}

module.exports = twc;