import React from "react";

const VectorBTN = ({ memberId, purchaseAmount, sbUserId }) => {
  const handleButtonClick = async () => {
    console.log("[Vector Currency]: Payment initiated.");
    if (window.Android && window.Android.CCWalletInterface) {
        await window.Android.CCWalletInterface.VectorCurrencyManagement(
        memberId,
        purchaseAmount,
        sbUserId
      );
    } else {
      console.error("CCWalletInterface is not available.");
    }
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
