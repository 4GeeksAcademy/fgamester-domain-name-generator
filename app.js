let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".net", ".us", ".io", ".cl"];
let domainTemplate = [pronoun, adj, noun, ext];

const domainGenerator = (obj) => {
  let domainArray = [];

  for (let iv in obj[3]) {
    for (let i in obj[2]) {
      for (let ii in obj[1]) {
        for (let iii in obj[0]) {
          domainArray.push(`${obj[0][iii]}${obj[1][ii]}${obj[2][i]}${obj[3][iv]}`);
        }
      }
    }
  }
  return domainArray;
};

// domainGenerator(domainTemplate);
console.log(domainGenerator(domainTemplate));
