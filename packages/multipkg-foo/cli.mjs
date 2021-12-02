#!/usr/bin/env node
import chalk from 'chalk';
import bar from '@qix/multipkg-bar';

console.log(chalk.magenta('Hello from multipkg-foo!'));
console.log(chalk.green(bar()));
