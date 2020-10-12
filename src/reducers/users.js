let initialState = {
  title: "FJ",
  users: [
    {
      id: 1,
      nama: "Empires",
      alamat: "Menggala",
      umur: "22",
      notelepon: "081273663077",
    },
    {
      id: 2,
      nama: "Wijaya",
      alamat: "Kedaton",
      umur: "20",
      notelepon: "081287654321",
    },
    {
      id: 3,
      nama: "Awi",
      alamat: "Kemiling",
      umur: "19",
      notelepon: "081212345678",
    },
  ],
  error: false,
};
export const users = (state = initialState, action) => {
  return state;
};
export default users;
