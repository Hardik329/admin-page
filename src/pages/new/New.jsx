import "./new.scss";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { adminRequest } from "../../utils.js";
import { v4 as uuidv4 } from "uuid";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  console.log(file);

  const location = useLocation().pathname.slice(1, 6);
  const isUser = location === "users";

  const handleUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = (e) => {
        if (!reader.error) {
          setFile(reader.result);
        } else {
          console.log(reader.error);
        }
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isUser) {
      const input = Array.from(e.target.elements).filter(
        (el) => el.name !== ""
      );

      const data = { id: uuidv4() };

      input.forEach((el) => {
        data[el.name] = el.value;
      });

      console.log(data);

      try {
        const res = await adminRequest.post("auth/register", data);
        console.log(res);
        console.log("User added successfully");
      } catch (err) {
        alert(err);
      }

      console.log(data);
    } else {
      const categories = e.target.categories.value.split(" ");

      const size = [];
      const color = [];
      Array.from(e.target.size?.elements).forEach((el) => {
        if (el.checked) {
          size.push(el.name);
        }
      });
      Array.from(e.target.color?.elements).forEach((el) => {
        if (el.checked) {
          color.push(el.name);
        }
      });
      const inStock = e.target.inStock.checked;

      const input = Array.from(e.target.elements).filter(
        (el) => el.type === "text"
      );
      const data = {
        size,
        color,
        inStock,
        id: uuidv4(),
        file: file,
      };

      console.log(data);

      input.forEach((el) => {
        data[el.name] = el.value;
      });

      data.categories = categories;

      if (!data.image_id) data.image_id = data.id;

      if (!data.file) data.image_id = "DEFAULT_IMAGE";

      console.log(data);

      try {
        await adminRequest.post("products", data);
        console.log("Product added successfully");

        window.location.reload();
      } catch (error) {
        alert(error);
      }
      // console.log(e.target.file.value);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file} alt="" />
          </div>
          <div className="right">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => handleUpload(e)}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => {
                if (input.label === "Size") {
                  return (
                    <div className="formInputSize" key={input.id}>
                      <fieldset name="size">
                        <legend>{input.label}</legend>
                        <div>
                          <input type="checkbox" id="XS" name="XS" />
                          <label htmlFor="XS">XS</label>
                        </div>
                        <div>
                          <input type="checkbox" id="S" name="S" />
                          <label htmlFor="S">S</label>
                        </div>
                        <div>
                          <input type="checkbox" id="M" name="M" />
                          <label htmlFor="M">M</label>
                        </div>
                        <div>
                          <input type="checkbox" id="L" name="L" />
                          <label htmlFor="L">L</label>
                        </div>
                        <div>
                          <input type="checkbox" id="XL" name="XL" />
                          <label htmlFor="XL">XL</label>
                        </div>
                      </fieldset>
                    </div>
                  );
                } else if (input.label === "In Stock") {
                  return (
                    <div className="formInputStock" key={input.id}>
                      <label>{input.label}</label>
                      <input
                        type={input.type}
                        name={input.field}
                        placeholder={input.placeholder}
                      />
                    </div>
                  );
                } else if (input.label === "Color") {
                  return (
                    <div className="formInputSize" key={input.id}>
                      <fieldset name={input.field}>
                        <legend>{input.label}</legend>
                        <div>
                          <input type="checkbox" id="Red" name="Red" />
                          <label htmlFor="Red">Red</label>
                        </div>
                        <div>
                          <input type="checkbox" id="Blue" name="Blue" />
                          <label htmlFor="Blue">Blue</label>
                        </div>
                        <div>
                          <input type="checkbox" id="Green" name="Green" />
                          <label htmlFor="Green">Green</label>
                        </div>
                        <div>
                          <input type="checkbox" id="Yellow" name="Yellow" />
                          <label htmlFor="Yellow">Yellow</label>
                        </div>
                        <div>
                          <input type="checkbox" id="Brown" name="Brown" />
                          <label htmlFor="Brown">Brown</label>
                        </div>
                        <div>
                          <input type="checkbox" id="Pink" name="Pink" />
                          <label htmlFor="Pink">Pink</label>
                        </div>
                        <div>
                          <input type="checkbox" id="Black" name="Black" />
                          <label htmlFor="Black">Black</label>
                        </div>
                        <div>
                          <input type="checkbox" id="Grey" name="Grey" />
                          <label htmlFor="Grey">Grey</label>
                        </div>
                        <div>
                          <input type="checkbox" id="White" name="White" />
                          <label htmlFor="White">White</label>
                        </div>
                      </fieldset>
                    </div>
                  );
                } else {
                  return (
                    <div className="formInput" key={input.id}>
                      <label htmlFor={input.field}>{input.label}</label>
                      <input
                        type={input.type}
                        name={input.field}
                        placeholder={input.placeholder}
                      />
                    </div>
                  );
                }
              })}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
