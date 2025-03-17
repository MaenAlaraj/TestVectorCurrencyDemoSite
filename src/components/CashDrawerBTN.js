import React from "react";

const CashDrawerBTN = ({ memberId, purchaseAmount, sbUserId, storeCode }) => {
  const handleOpenDrawer = async () => {
    console.log("[Opening Cash Drawer]: Opening Cash Drawer initiated.");

    await window.GCPaymentInterface.openCashDrawe();
  };

  return (
    <button
      onClick={handleOpenDrawer}
      className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none"
    >
      Open Cash Drawer
    </button>
  );
};

export default CashDrawerBTN;
