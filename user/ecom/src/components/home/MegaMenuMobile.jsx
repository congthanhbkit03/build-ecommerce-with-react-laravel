import React, { Component, Fragment, useEffect, useState } from "react";
import AppURL from "../../api/AppURL";
import { toast } from "react-toastify";

const MegaMenuMobile = () => {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    console.log(AppURL.AllCategoryDetails);
    fetch(AppURL.AllCategoryDetails)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMenuData(data);
      })
      .catch((err) => {
        toast.error("Co loi xay ra");
      });
  }, []);

  const MenuItemClick = (event) => {
    event.target.classList.toggle("active");
    var panel = event.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
  console.log(menuData);
  const MyView = menuData.map((catItem, i) => {
    return (
      <div key={i.toString()}>
        <button onClick={MenuItemClick} className="accordionMobile">
          <img
            className="accordionMenuIconMobile"
            src={catItem.category_image}
          />
          &nbsp; {catItem.category_name}
        </button>
        <div className="panelMobile">
          <ul>
            {catItem.subcategory.map((sub, i) => {
              return (
                <li>
                  <a href="#" className="accordionItemMobile">
                    {sub.subcategory_name}{" "}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  });

  return (
    <div className="accordionMenuDivMobile">
      <div className="accordionMenuDivInsideMobile">{MyView}</div>
    </div>
  );
};

export default MegaMenuMobile;
