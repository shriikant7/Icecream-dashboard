import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { getMenu } from "../data/iceCreamData";
import LoaderMessage from "../structure/LoaderMessage";
import IcecreamImages from "./IceCreamImage";
import propTypes from "prop-types";

const Menu = ({ history }) => {
  const [menu, setmenu] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    let isMounted = true;
    getMenu().then((menudata) => {
      if (isMounted) {
        setmenu(menudata);
        setisLoading(false);
        //setmenu([]);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const onclickhandler = (to) => {
    history.push(to);
  };

  const onLinkClickhandler = (event) => {
    event.stopPropagation();
  };
  return (
    <main>
      <Helmet>
        <title> Awesome iceCream</title>
      </Helmet>
      <h2 className="main-heading">Rock your test buds with one of these</h2>
      <LoaderMessage loadingMessage="Loading" isLoading={isLoading} />
      {menu.length > 0 ? (
        <ul className="container">
          {menu.map(
            ({ id, iceCream, inStock, quantity, price, description }) => {
              return (
                <li key={id.toString()}>
                  <section
                    className="card"
                    onClick={() => {
                      onclickhandler(`/menu-item/${id.toString()}`);
                    }}
                  >
                    <div className="image-container">
                      <IcecreamImages icecreamid={id} />
                    </div>
                    <div className="text-container">
                      <h3>
                        <Link
                          to={`/menu-item/${id.toString()}`}
                          onClick={onLinkClickhandler}
                        >
                          {iceCream.name}
                        </Link>
                      </h3>
                      <div className="content card-content">
                        <p className="price">{`$${price.toFixed(2)}`}</p>
                        <p className={`stock${inStock ? "" : "out"}`}>
                          {inStock
                            ? `${quantity} in stock`
                            : "currently out of stock"}
                        </p>
                        <p className="description">{description}</p>
                      </div>
                    </div>
                  </section>
                </li>
              );
            }
          )}
        </ul>
      ) : (
        !isLoading && <p>Sorry, menu is empty</p>
      )}
    </main>
  );
};
Menu.prototype = {
  history: propTypes.shape({ push: propTypes.func.isRequired }),
};
export default Menu;
