/**
 *
 * Commands
 * tsc hello-world.ts
 * tsc --target ES5 hello-world.ts
 * tsc --watch hello-world.ts
 * tsc (settings by tsconfig.json)
 */

function log(str: string) {
  console.log(str);
}

const greeting = 'Hello World';

log(greeting);
