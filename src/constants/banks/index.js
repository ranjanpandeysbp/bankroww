export const banksUrl = (city) =>
  `https://vast-shore-74260.herokuapp.com/banks?city=${city}`;

export const cityList = ["MUMBAI", "PUNE", "RANCHI", "DELHI", "GWALIOR"];

const sample = {
  ifsc: "ALLA0210260",
  bank_id: 11,
  branch: "GWALIOR",
  address: "SANATAN DHARAM MANDIR MARG DIST. GWALIOR MADHYA PRADESH  474001",
  city: "GWALIOR",
  district: "GWALIOR",
  state: "MADHYA PRADESH",
  bank_name: "ALLAHABAD BANK",
};
