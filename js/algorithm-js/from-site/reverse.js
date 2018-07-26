reverse = (str) => {
  let i = 1;
  let reverseString = "";

  while (i <= str.length) {
    reverseString += str[str.length - i]; 
    i++;
  }
  return reverseString;
};

console.log(reverse('aaaa'));

console.log(true - undefined);

