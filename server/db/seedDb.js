const prisma = require("./prisma.js");


const catalog = [
  { id: 1, pathName: "bratwurst.png", name: "Bratwurst", price: 2.99, details: "A premium spicy german sausage best served cold" },
  { id: 2, pathName: "bread.png", name: "Bread", price: 3.99, details: "A delicious, glutinous snack or sandwhich ingredient" },
  { id: 3, pathName: "crock-pot.png", name: "Crock Pot", price: 5.99, details: "A must-have kitchen appliance that cooks FOR you" },
  { id: 4, pathName: "fragrance-spray.png", name: "Fragrance Spray", price: 1.99, details: "A gourmand mist that freshens any space" },
  { id: 5, pathName: "planters.png", name: "Planters", price: 3.49, details: "A chic set of pots to house succulents or other greens" },
  { id: 6, pathName: "ketchup.png", name: "Ketchup", price: 2.49, details: "A striking red condiment you can dip your fries in" },
];

async function main() {
  console.log("Clearing existing products...");
  await prisma.product.deleteMany();

  console.log("Seeding products...");
  await prisma.product.createMany({
    data: catalog,
  });

  console.log(`Seeded ${catalog.length} products.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });