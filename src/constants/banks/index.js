export const banksUrl = (city) =>
  `https://vast-shore-74260.herokuapp.com/banks?city=${city}`;

export const cityList = ["MUMBAI", "PUNE", "RANCHI", "DELHI", "GWALIOR"];

export const showSizes = [10, 15, 20];

export const dropdownCities = [
  {
    types: ["MUMBAI", "DELHI", "LUCKNOW", "BANGALORE", "HYDERABAD"],
  },
];

export const dropdownCategories = [
  {
    types: ["Bank Name", "IFSC", "Branch", "Bank Id", "Address"],
  },
];

export const categoryMap = {
  "Bank Name": "bank_name",
  Address: "address",
  "Bank Id": "bank_id",
  Branch: "branch",
  IFSC: "ifsc",
};

export const criteriaMap = {
  bank_name: "Bank Name",
  address: "Address",
  bank_id: "Bank Id",
  branch: "Branch",
  ifsc: "IFSC",
};
