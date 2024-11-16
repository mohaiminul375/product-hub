import { faker } from "@faker-js/faker";

export const generateProducts = (count = 10) => {
    const products = [];
    for (let i = 0; i < count; i++) {
      products.push({
        _id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        image: faker.image.avatarGitHub(),
        category: faker.commerce.department("Music"),
      });
    }
    return products;
  };