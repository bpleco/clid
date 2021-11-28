#!/usr/bin/env node
const program = require('commander');

program.version(`clid ${require('../package').version}`).usage('<command> [options]');

program
  .command('bson')
  .description('create a new BSON ObjectID and copy it to your clipboard')
  .action(() => {
    require('../dist/ids/bson').default();
  });

program
  .command('hash <text>')
  .description('turn a text input into a md5 with optional secret')
  .option('-s --secret <secret>', 'An optional secret to hash the string with ')
  .action((_x, { parent, secret }) => {
    const { args } = parent;

    require('../dist/ids/hash').default(args.join(' '), secret);
  });

program
  .command('nanoid')
  .description('create a new nanoid and copy it to your clipboard')
  .option('-l, --length <length>', 'The length of the id [default 21]')
  .action(({ length }) => {
    require('../dist/ids/nanoid').default(length);
  });

program
  .command('shortid')
  .description('create a new shortid (not recommended, use nanoid instead)')
  .action(() => {
    require('../dist/ids/shortid').default();
  });

program
  .command('slug <text>')
  .description('turn a text input into a slug with - separator')
  .action((_x, { parent }) => {
    const { args } = parent;
    require('../dist/ids/slug').default(args.join(' '));
  });

program
  .command('ts')
  .description('create a Date.now() timestamp')
  .action(() => {
    require('../dist/ids/ts').default();
  });

program
  .command('uuid')
  .description('create a new UUID and copy it to your clipboard [V4]')
  .action(() => {
    require('../dist/ids/uuid').default();
  });

program.parse(process.argv);
