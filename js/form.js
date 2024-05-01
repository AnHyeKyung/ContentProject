const userData = {
  name: "안혜경",
  id: "hye",
  address: "서울",
};
const name = document.querySelector(".name");
const id = document.querySelector(".id");
const address = document.querySelector(".address");

name.value = userData.name;
id.value = userData.id;
address.value = userData.address;
