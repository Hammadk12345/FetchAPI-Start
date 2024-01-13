console.log("movin to the new customer");
fetch("https://randomuser.me/api/?result=1")
  .then((response) => response.json())
  .then((data) => console.log(data));
console.log(
  `our valued customer, please give me some time while i get some information back from the Records dept.z`
);
