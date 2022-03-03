import axios from "axios";
//const GET_MENU = `/api/menu`;
const GET_MENU = `http://localhost:5000/menuData`;

export const getMenu = () => {
  return axios.get(GET_MENU).then((response) => {
    return response.data.sort((a, b) => {
      if (a.iceCream.name < b.iceCream.name) {
        return -1;
      }
      if (a.iceCream.name > b.iceCream.name) {
        return 1;
      }
      return 0;
    });
  });
};
