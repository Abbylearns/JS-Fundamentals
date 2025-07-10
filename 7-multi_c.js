const count = parseInt(process.argv[2]);
let result = "";

if (isNaN(count)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < count; i++) {
    result += "C is fun\n";
  }
  console.log(result.trim());
}

