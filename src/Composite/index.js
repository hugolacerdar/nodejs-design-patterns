/*
Intent: "Compose objects into tree structures to represent part-whole hierarchies. Composite
lets clients treat individual objects and compositions of objects uniformly."
*/

var CatalogItem = require("./CatalogItem");
var CatalogGroup = require("./CatalogGroup");

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

var shoesGroup = new CatalogGroup("Shoes and such", [
  boots,
  sneakers,
  flipFlops,
]);

var foodGroup = new CatalogGroup("Food for while you try on clothes", [
  new CatalogItem("Milkshake", 5.99),
  new CatalogItem("French Fries", 3.99),
]);

var keychain = new CatalogItem("Key Chain", 0.99);

var catalog = new CatalogGroup("Clothes and Food", [
  keychain,
  shoesGroup,
  foodGroup,
]);

console.log(`$${catalog.total}`);

catalog.print();
