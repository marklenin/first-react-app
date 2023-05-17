import React, { useState } from "react";

const CheckoutPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div style={{ marginLeft: "100px", maxWidth: "400px", margin: " 0 auto" }}>
      <img
        src="https://media.licdn.com/dms/image/C561BAQEo_28BT5vlBA/company-background_10000/0/1622140739151?e=1684843200&v=beta&t=slXLVmVLX35Ctj0xpGImsDZcpOhI_qLppxhQeVHtrMs"
        alt=" картинка"
        style={{
          maxWidth: "800px",
          marginBottom: "20px",
          marginRight: "550px",
        }}
      />
      <h2 style={{ marginTop: "15px", marginBottom: "10px" }}>
        Варианты экспресс-оплаты
      </h2>
      <div>
        <input
          type="submit"
          value="ShopPay"
          style={{
            marginTop: "20px",
            height: "50px",
            width: "200px",
            marginBottom: "10px",
            color: "white",
            backgroundColor: "blue",
            fontSize: "30px",
          }}
        />
        <input
          type="submit"
          value="GPay"
          style={{
            marginTop: "20px",
            height: "50px",
            width: "200px",
            color: "white",
            backgroundColor: "black",
            fontSize: "30px",
            marginBottom: "5px",
          }}
        />
      </div>

      <h4 style={{ marginLeft: "40px", marginBottom: "40px" }}>
        У вас уже есть аккаунт? Авторизоваться
      </h4>

      <h1>Оформление заказа</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Имя:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginBottom: "20px", width: "100%", height: "25px" }}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: "20px", width: "100%", height: "25px" }}
        />

        <label htmlFor="address">Адрес доставки:</label>
        <textarea
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          style={{ marginBottom: "20px", width: "100%", height: "100px" }}
        />

        <label htmlFor="credit-card">Номер кредитной карты:</label>
        <input
          type="text"
          id="credit-card"
          value={creditCard}
          onChange={(e) => setCreditCard(e.target.value)}
          required
          style={{ marginBottom: "20px", width: "100%", height: "25px" }}
        />

        <label htmlFor="expiry">Срок действия:</label>
        <input
          type="text"
          id="expiry"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          required
          style={{ marginBottom: "20px", width: "100%", height: "25px" }}
        />

        <label htmlFor="cvv">CVV код:</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
          style={{ marginBottom: "20px", width: "100%", height: "25px" }}
        />

        <input
          type="submit"
          value="Оплатить"
          style={{ marginTop: "20px", height: "35px" }}
        />
      </form>
    </div>
  );
};

export default CheckoutPage;
