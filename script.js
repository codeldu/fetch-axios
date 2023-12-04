
// let button = document.querySelector('#getdata');



// let getData = () =>{
// fetch('https://northwind.vercel.app/api/suppliers')
// .then(function(a){
//     return a.json()
// })
// .then(data => {
//     console.log(data);
//     data.forEach(element => {
//         console.log(element);
//         document.body.innerHTML += `
//         <p>${element.contactName} </p>
//         <p>${element.companyName} </p>
//         `
//     });
// });
// }

// button.addEventListener('click', getData)


//GET , POST , PUT , DELETE , (PATCH)

// https://restcountries.com/v3.1/all

const container = document.querySelector('.container');

// fetch('https://restcountries.com/v3.1/all')
// .then(res => res.json())
// .then(data => {
//     console.log(data);
//     data.sort((a,b)=> {
//         if (a.name.common < b.name.common){
//             return -1;
//         }else if(a.name.common > b.name.common){
//             return 1;
//         }else{
//             return 0
//         }
//         a.name.common.localeCompare(b.name.common)
//     })
//     console.log("Sorted" , data);
//     data.map(el => {
//         container.innerHTML += `
//         <div class="card">
//         <div class="flag">
//             <img src="${el?.flags?.png}" alt="flag">
//         </div>
//         <div class="info">
//             <p>Name : ${el?.name?.common}</p>
//             <p>Capital : ${el?.capital} </p>
//             <p>Population : ${el?.population}</p>
//         </div>
//     </div>
//         `
//     });
// }).catch(err=>container.innerHTML = `Xeta Bash verdi`)


// const getByName = async function(name){
//     let response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
//     let [data] =  await response.json();

//     console.log(data);

//     container.innerHTML += `
//                 <div class="card">
//                <div class="flag">
//                    <img src="${data?.flags?.png}" alt="flag">
//                 </div>
//                <div class="info">
//                    <p>Name : ${data?.name?.common}</p>
//                    <p>Capital : ${data?.capital} </p>
//                    <p>Population : ${data?.population}</p>
//                </div>
//         </div>
//                `




// }

// getByName("azerbaijan");
// getByName("georgia");
// getByName("turkey");


// const getByCountryName = (name) => {
//     fetch(`https://restcountries.com/v3.1/name/${name}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             container.innerHTML += `
//                     <div class="card">
//                    <div class="flag">
//                        <img src="${data[0]?.flags?.png}" alt="flag">
//                     </div>
//                    <div class="info">
//                        <p>Name : ${data[0]?.name?.common}</p>
//                        <p>Capital : ${data[0]?.capital} </p>
//                        <p>Population : ${data[0]?.population}</p>
//                    </div>
//             </div>
//                    `
//             return fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[0]}`)
//         })
//         .then(res => res.json())
//         .then(data => {
//             container.innerHTML += `
//     <div class="card">
//    <div class="flag">
//        <img src="${data[0]?.flags?.png}" alt="flag">
//     </div>
//    <div class="info">
//        <p>Name : ${data[0]?.name?.common}</p>
//        <p>Capital : ${data[0]?.capital} </p>
//        <p>Population : ${data[0]?.population}</p>
//    </div>
// </div>
//    `
//         })
// }

// getByCountryName("usa")

// function getInfo(){
//     fetch('https://northwind.vercel.app/api/categories/',
//         {
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
        
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({description: "CODE ACADEMY", name : "LENKERAN" }), // body data type must match "Content-Type" header
//       })
//       .then(res =>res.json())
//       .then(data => console.log(data))
// }

// getInfo();

// const obj = {name : "Adil", description: "Mydesc"}

const getData = async ()=>{
    let response = await axios.get("https://northwind.vercel.app/api/categories")
    console.log(response.data);
}

getData()
