const data = [
      {
        iso2: "AF",
        iso3: "AFG",
        country: "Afghanistan",
        cities: [
          "Herat",
          "Kabul",
          "Kandahar",
          "Molah",
          "Rana",
          "Shar",
          "Sharif",
          "Wazir Akbar Khan",
        ],
      },
      {
        iso2: "AL",
        iso3: "ALB",
        country: "Albania",
        cities: [
          "Elbasan",
          "Petran",
          "Pogradec",
          "Shkoder",
          "Tirana",
          "Ura Vajgurore",
        ],
      },
      {
        iso2: "DZ",
        iso3: "DZA",
        country: "Algeria",
        cities: [
          "Algiers",
          "Annaba",
          "Azazga",
          "Batna City",
          "Blida",
          "Bordj",
          "Bordj Bou Arreridj",
          "Bougara",
          "Cheraga",
          "Chlef",
          "Constantine",
          "Djelfa",
          "Draria",
          "El Tarf",
          "Hussein Dey",
          "Illizi",
          "Jijel",
          "Kouba",
          "Laghouat",
          "Oran",
          "Ouargla",
          "Oued Smar",
          "Relizane",
          "Rouiba",
          "Saida",
          "Souk Ahras",
          "Tamanghasset",
          "Tiaret",
          "Tissemsilt",
          "Tizi",
          "Tizi Ouzou",
          "Tlemcen",
        ],
      },
      {
        iso2: "AD",
        iso3: "AND",
        country: "Andorra",
        cities: [
          "Andorra la Vella",
          "Canillo",
          "Encamp",
          "Engordany",
          "Escaldes-Engordany",
          "La Massana",
          "Llorts",
          "Ordino",
          "Santa Coloma",
          "Sispony",
          "Soldeu",
        ],
      },
      {
        iso2: "AO",
        iso3: "AGO",
        country: "Angola",
        cities: [
          "Ambriz",
          "Benguela",
          "Cabinda",
          "Cacole",
          "Camabatela",
          "Cazeta",
          "Huambo",
          "Kuito",
          "Lobito",
          "Luanda",
          "Lubango",
          "Lucapa",
          "Lumeje",
          "Malanje",
          "Menongue",
          "Muxaluando",
          "Namibe",
          "Ondjiva",
          "Piri",
          "Saurimo",
          "Talatona",
        ],
      },
      {
        iso2: "AI",
        iso3: "AIA",
        country: "Anguilla",
        cities: [
          "The Valley",
          "Blowing Point Village",
          "Sandy Ground Village",
          "Sandy Hill",
          "East End Village",
          "George Hill",
          "Island Harbour",
          "North Hill Village",
          "North Side",
          "South Hill Village",
          "Stoney Ground",
          "Farrington",
          "The Quarter",
          "West End Village",
        ],
      },
];

// task1
// function OlkeAdlari() {
//       let olkeAdlari = [];
//       for (let i = 0; i < data.length; i++) {
//             olkeAdlari.push(data[i].country);
//       }
//       return olkeAdlari;
// }
// console.log(OlkeAdlari());


// task2(tam deyil)
// function OlkeHerf() {
//       let olkeherf = [];
//       for (let i = 0; i < data.length; i++) {
//             for (let j = 0; j < data[i].country.length; j++) {
//                   if(data[i][j] == "A"){
//                         olkeherf.push(data[i].country[j]);
//                   }
//             }
//       }
//       return olkeherf;
// }
// console.log(OlkeHerf());


// task3
// function enconseher(){
//     maxCities=0 ; 
//     maxCountry = " "; 
//     for(let i = 0; i<data.length ; i++){
//       if(data[i].cities.length > maxCities){
//         maxCities=data[i].cities.length; 
//         maxCountry = data[i].country;
//       }
//     }
//     return maxCountry; 
// }
// console.log(enconseher());


// task4
// function enuzunAd(){
//   maxCities=" " ;
//   maxCountry =0 ; 
//   for(let i = 0; i<data.length ; i++){
//     if(data[i].country.length >maxCountry){
//       maxCountry = data[i].country.length; 
//       maxCities = data[i].cities; 
//     }
//   }
//   return  maxCities; 
// }
// console.log(enuzunAd());



// task5
// function sehersayi(){
  
//   for(let i = 0; i < data.length ; i++){
//     cityCount=0; 
//     for(let j = 0; j <data[i].cities.length; j++){
//       cityCount++;
//     }
//     console.log(data[i].country , ":" , cityCount);
//   }
// }
// sehersayi(); 