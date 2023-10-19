import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns, userColumns } from "../../datatablesource";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";
import { adminRequest, API_URL } from "../../utils";

const Datatable = ({ isUser }) => {
  const [data, setData] = useState();

  console.log(isUser);

  const handleDelete = async (id) => {
    setData(data.filter((item) => item.id !== id));
    try {
      await adminRequest.delete((isUser? "users/" : "products/") + id);
      console.log("Deleted successfully");
    } catch (error) {
      alert(error);
    }
    console.log(id);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(API_URL + (isUser ? "users" : "products"), {
        headers: { token: "Bearer " + user?.accessToken },
      });
      const users = await res.data;
      console.log(users);
      setData(users);
    };
    getUsers();
  }, [isUser]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  if (!user) return <Navigate to="/login"></Navigate>;
  if (!data) return null;
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to={(isUser ? "/users/" : "/products/") + "new"} className="link">
          Add New
        </Link>
      </div>
      {isUser ? (
        <DataGrid
          className="datagrid"
          rows={data}
          getRowId={(row) => row._id}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      ) : (
        <DataGrid
          className="datagrid"
          rows={data}
          getRowId={(row) => row._id}
          columns={productColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      )}
    </div>
  );
};

export default Datatable;
