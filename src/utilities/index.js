
const utils = {
  randomNumber() { // generates random 3 digit number
    return Math.floor(Math.random()* (999 - 100 + 1) + 100);
  },
  // sorts by category
  dynamicSort(property) {
    let prop = property;
    let sortOrder = 1;
    if (prop[0] === '-') {
      sortOrder = -1;
      prop = prop.substr(1);
    }
    return function check(a, b) {
      const result = (a[prop] < b[prop]) ? // eslint-disable-line no-nested-ternary
        -1 :
        (a[prop] > b[prop]) ?
          1 :
          0;
      return result * sortOrder;
    };
  },
  randomCategory(categories) {
    const cats = categories.map((item) => item.name);
    return cats[Math.floor(Math.random() * cats.length)];
  },
  checkIfEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
};

export default utils;

