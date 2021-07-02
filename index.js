let x = "John"
let y = "Doe"
console.log(`${x} <> ${y}`)

let details = {
    name: "Chris",
    surname: "Ankobil",
    email: "crankobil@yahoo.co.uk"
}

//console.log(details)

delete details.email;

let newArray = [];

for (let i =0; i < 10; i++){
    newArray.push(`String no. ${i}`)
}
//console.log(newArray)

let randomNumberArray = []

for (let i =0; i < 100; i++){
    randomNumberArray.push(Math.floor(Math.random() * 100));
}
//console.log(randomNumberArray)

const maxMin = (anyArray) => {
    let maxNumber = Math.max.apply(Math, anyArray);
    let minNumber = Math.min.apply(Math, anyArray)
   
    console.log(`max = ${maxNumber}, min = ${minNumber}`)}

/*    const maxMin = (anyArray) => {
    
    for (let i = 0; i < 100; i++){
        let maxNumber = anyArray[0]
        let minNumber = anyArray[0]

        if (anyArray[i] > maxNumber){
            maxNumber = anyArray[i]}
        if(anyArray[i] < minNumber){
            minNumber = anyArray[i]}
    console.log(`max = ${maxNumber}, min = ${minNumber}`)
    }
}*/
maxMin(randomNumberArray)

let arrayOfArrays = [];

      for (let i = 0; i < 10; i++) {
        let innerArray = [];
        for (let j = 0; j < 10; j++) {
          innerArray.push(Math.round(Math.random() * 10));
        }
        arrayOfArrays.push(innerArray);
      }

/*console.log(arrayOfArrays);*/

      const longestArray = (array1, array2) => {
        if (array1.length >= array2.length) {
            return array1
      } else { 
          return array2 }
      }
/*console.log(longestArray([1,2,3],[1,2,5,4]))*/


function returnLargestSum(array1, array2) {
  let sum1 = 0;

  for (let number of array1) {
    sum1 += number;
  }

  let sum2 = 0;

  for (let number of array2) {
    sum2 += number;
  }

  return sum1 >= sum2 ? sum1 : sum2;
}

/*console.log(returnLargestSum([20,30],[40,60]))*/

let container = document.getElementById("container");

let allTableData = document.querySelectorAll("td");

allTableData.forEach((td) => {
    td.innerText = "Change td"
})

const chageHeading = (text) => {
    const heading = document.querySelector("h1")
    heading.innerText = text
}

const addRow = function () {
    const tbody = document.querySelector("tbody");
    const tr = document.createElement("tr");
    for (let i = 0; i < 5; i++) {
      const td = document.createElement("td");
      td.innerText = i + 1;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  };
  addRow();
 
  const addClassToRow = function () {
    const tableRows = document.querySelectorAll("tr");
    trs.forEach((tr) => {
      tableRows.classList.add("test");
    });
  };
 
 