"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regression = exports.smoke = exports.dev = void 0;
const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/step-definitions/**/**/*.ts \
                -f json:./reports/report.json \
                --format progress-bar `;
const dev = `${common} --tags '@dev'`;
exports.dev = dev;
const smoke = `${common} --tags '@smoke'`;
exports.smoke = smoke;
const regression = `${common} --tags '@regression'`;
exports.regression = regression;
console.log('\n🥒 ✨ 🥒 ✨ 🥒 ✨ 🥒 ✨ 🥒 ✨ 🥒 ✨ 🥒 ✨ 🥒 \n');
