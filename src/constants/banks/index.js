export const banksUrl = (city) =>
  `https://vast-shore-74260.herokuapp.com/banks?city=${city}`;

export const cityList = ["MUMBAI", "PUNE", "RANCHI", "DELHI", "GWALIOR"];

export const showSizes = [10, 15, 20];

export const dropdownCities = [
  {
    types: ["MUMBAI", "PUNE", "RANCHI", "DELHI", "GWALIOR"],
  },
];

export const dropdownCategories = [
  {
    types: ["Bank Name", "IFSC", "Branch", "Bank Id", "Address"],
  },
];
