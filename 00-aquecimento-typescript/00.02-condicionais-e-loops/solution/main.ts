const anos = [1899, 1937, 1949, 1956, 1890];

function classificarSeculo(ano: number) {
  return ano < 1900 ? "século 19" : "século 20";
}

for (const ano of anos) {
  console.log(`${ano} -> ${classificarSeculo(ano)}`);
}
