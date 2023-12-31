import { CLOUDINARY_BASE_URL } from "./utils";

export const userColumns = [
  { field: "id", headerName: "ID", width: 250 },
  {
    field: "user",
    headerName: "User",
    width: 120,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.username}</div>;
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "lastname",
    headerName: "Last Name",
    width: 150,
  },
  {
    field: "isAdmin",
    headerName: "Admin",
    width: 150,
  },
];

export const productColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 150,
  },
  {
    field: "image",
    headerName: "Image",
    width: 150,
    renderCell: (params) => (
      <img
        src={CLOUDINARY_BASE_URL + "products/" + params.row.image_id + ".jpg"}
      />
    ),
  },
  {
    field: "title",
    headerName: "Title",
    width: 150,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 150,
  },
  {
    field: "image_id",
    headerName: "Image ID",
    width: 150,
  },
  {
    field: "categories",
    headerName: "Categories",
    width: 150,
  },
  {
    field: "size",
    headerName: "Size",
    width: 150,
  },
  {
    field: "color",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];
