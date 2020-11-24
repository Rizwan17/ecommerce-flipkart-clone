import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../actions";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import { generatePublicUrl } from "../../urlConfig";
import { BiRupee } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

import "./style.css";
import { Breed } from "../../components/MaterialUI";

/**
 * @author
 * @function OrderPage
 **/

const OrderPage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  console.log(user);

  return (
    <Layout>
      <div style={{ maxWidth: "1160px", margin: "5px auto" }}>
        <Breed
          breed={[
            { name: "Home", href: "/" },
            { name: "My Account", href: "/account" },
            { name: "My Orders", href: "/account/orders" },
          ]}
          breedIcon={<IoIosArrowForward />}
        />
        {user.orders.map((order) => {
          return order.items.map((item) => (
            <Card style={{ margin: "5px 0" }}>
              <div className="orderItemContainer">
                <div className="orderImgContainer">
                  <img
                    className="orderImg"
                    src={generatePublicUrl(
                      item.productId.productPictures[0].img
                    )}
                  />
                </div>
                <div className="orderRow">
                  <div className="orderName">{item.productId.name}</div>
                  <div className="orderPrice">
                    <BiRupee />
                    {item.payablePrice}
                  </div>
                  <div>{order.paymentStatus}</div>
                </div>
              </div>
            </Card>
          ));
        })}
      </div>
    </Layout>
  );
};

export default OrderPage;
