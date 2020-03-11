const args = process.argv.slice(2);

// edge 1 if no args
if (args.length === 0) {
  return;
}

for (second of args) {
  // edge 3 type check, if number
  if (isNaN(Number(second))) {
    continue;
  }
  // edge 2 if negative numbers
  if (second < 0) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, second * 1000);
}
