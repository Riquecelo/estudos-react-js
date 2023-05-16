import React, { useEffect, useState } from "react";
import styles from "./Btn.module.css";
import { OrderForm } from "vtex.order-manager";

const BtnCoupon = () => {
  const [show, setShow] = useState(styles.hide);
  let btnExcluir = styles.btnExcluir;
  let subContainer = styles.subContainer;
  const { useOrderForm } = OrderForm;
  const { orderForm, setOrderForm } = useOrderForm();

  const [valor, setValor] = useState("");
  const handleChange = (event) => {
    setValor(event.target.value);
  };

  useEffect(() => {
    const coupon = orderForm && {
      ...orderForm.marketingData,
      coupon: valor,
    };
    setOrderForm({
        marketingData: coupon,
      },[]);
  });

  function btnCupom(e) {
    e.preventDefault();

    var coupon = orderForm.marketingData.coupon;
    fetch(`/api/checkout/pub/orderForm/${orderForm.id}/coupons`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `${coupon}`,
      }),
    })
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then((response) => {
        setOrderForm(response);
        setShowSubContainer(styles.hide);
        setShow(styles.active);
      })
      .catch((error) => {
        alert("deu ruin!");
        console.log(error);
      });
  }

  function excluirCupom(e) {
    e.preventDefault();
    var coupon = "";
    fetch(`/api/checkout/pub/orderForm/${orderForm.id}/coupons`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `${coupon}`,
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setOrderForm(resp);
      })
      .catch((error) => console.log("excluindo", error));
    setShowSubContainer(styles.active);
    setShow(styles.hide);
    console.log(orderForm);
  }

  return (
    <>
      <form>
        <fieldset className={styles.fieldsetBtn}>
          <p className={styles.containerBtn}>
            <label className={styles.textBtn}>Cupom de desconto</label>
            <p className={styles.containerBtn}>
              <span className={`${subContainer} `}>
                <input
                  type="text"
                  value={valor}
                  id="cart-codigo"
                  className={styles.inputCodigo}
                  placeholder="Digite o cupom aqui"
                  onChange={handleChange}
                ></input>
                <button
                  onClick={btnCupom}
                  type="submit"
                  id="cart-codigo-add"
                  className={styles.btnAplicar}
                >
                  Aplicar
                </button>
              </span>
            </p>
            <div className={`${subContainer}${show}`}>
              <p className={styles.p_cupom}>{valor}</p>
              <button onClick={excluirCupom} className={`${btnExcluir}`}>
                excluir
              </button>
            </div>
          </p>
        </fieldset>
      </form>
    </>
  );
};

export default BtnCoupon;
