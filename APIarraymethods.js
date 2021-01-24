var req = new XMLHttpRequest();

req.open("GET", "https://restcountries.eu/rest/v2/all", true);

req.send();

req.onload = function () {
  var data = JSON.parse(this.response);
  //Get all countries from Asia continent/regions
  var asiareg = data.filter((el) => el.region === "Asia");
  console.log(asiareg);

  //Get all countries with population of less than 2 lacs
  var pop = data.filter((el) => el.population < 200000);
  console.log(pop);

  //Print the following details - Country name, capital, flag using forEach
  data.forEach((el) => {
    console.log(el.name);
    console.log(el.capital);
    console.log(el.flag);
  });

  //Print the total population of all countries using reduce
  var totalpop = data.reduce((acc, el) => {
    return acc + el.population;
  }, 0);
  console.log(totalpop);

  //Print the countries which use US dollars as currency.
  var USdollars = data.filter((el) =>
    el.currencies.some((el) => el.code === "USD")
  );
  console.log(USdollars);
};
