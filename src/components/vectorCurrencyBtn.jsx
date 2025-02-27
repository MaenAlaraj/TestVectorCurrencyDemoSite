import React from "react";

const VectorBTN = ({ memberId, purchaseAmount, userRankInfo }) => {
  const handleButtonClick = async () => {
    console.log("[Vector Currency]: Payment initiated.");

    // Log values in console
    console.log("会員番号:", memberId);
    console.log("購入金額:", purchaseAmount);
    console.log("UserRankInfo:", userRankInfo);



    await window.CCWalletInterface.VectorCurrencyManagement(memberId,purchaseAmount,userRankInfo);
  };

  return (
    <button
      onClick={handleButtonClick}
      className="w-full text-2xl font-bold bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-all shadow-md"
    >
      VectorBTN
    </button>
  );
};

export default VectorBTN;
