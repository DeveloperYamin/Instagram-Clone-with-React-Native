import { faker } from '@faker-js/faker';

export const USERS = [
     {
          user: "Developer Yamin",
          image: "https://yt3.ggpht.com/yti/APfAmoH16aYOGfb0Rv1MoZ2BMZo7S1TbKq6_pUPtJFxF=s88-c-k-c0x00ffffff-no-rj-mo",
     },
     {
          user: faker.name.findName(),
          image: faker.image.imageUrl(),
     },
     {
          user: faker.name.findName(),
          image: faker.image.imageUrl(),
     },
     {
          user: faker.name.findName(),
          image: faker.image.imageUrl(),
     },
     {
          user: faker.name.findName(),
          image: faker.image.avatar(),
     },
     {
          user: faker.name.findName(),
          image: faker.image.imageUrl(),
     },
     {
          user: faker.name.findName(),
          image: faker.image.imageUrl(),
     },
];