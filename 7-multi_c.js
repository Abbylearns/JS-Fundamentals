const count = parseInt(process.argv[2]);
let output = "";

if (isNaN(count) || count <= 0) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < count; i++) {
    output += "C is fun\n";
  }
  console.log(output.trim());
}
