// For loop: calculating sum of even numbers from 1 - 20
let total = 0

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        total += i;
    }
}

console.log(total);

// Nested loops
let product = 0
for (i = 1; i <= 5; i++) {
    for (j =1; j <= 5; j++) {
        product = i * j;
        console.log(`${i} * ${j} = ${product}`);
    }
    console.log("-----------------------")
}