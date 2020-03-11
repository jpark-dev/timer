const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {

  if (key === '\u0003') {
    process.stdout.write('\rThanks for using me, ciao!\n');
    process.exit();
  }
  if (key === '\u0062') {
    process.stdout.write('\x07');
  }
  if (key === '\u0031' || key === '\u0032' || key === '\u0033' || key === '\u0034' || key === '\u0035' || key === '\u0036' || key === '\u0037' || key === '\u0038' || key === '\u0039') {
    let utf8Key = encodeURIComponent(key);
    process.stdout.write(`setting timer for ${utf8Key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, utf8Key * 1000);
  }
});
