const accum = s => s.toLowerCase().split("").map((char, i) => char.toUpperCase() + char.repeat(i)).join("-");
