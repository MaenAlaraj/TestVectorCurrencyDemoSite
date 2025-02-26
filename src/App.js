import React from "react";
import VectorBTN from "./components/vectorCurrencyBtn"; // Import the button component


const App = () => {
  // Define label values
  const memberId = "08016971552";
  const purchaseAmount = "1000";
  const sbUserId = "09000000013";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[450px] text-center border border-gray-300">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">会員情報</h2>
        <LabelView label="会員番号" value={memberId} />
        <LabelView label="購入金額" value={purchaseAmount} />
        <LabelView label="SBUserID" value={sbUserId} />
        <div className="mt-8">
          <VectorBTN
            memberId={memberId}
            purchaseAmount={purchaseAmount}
            sbUserId={sbUserId}
          />
        </div>
      </div>
    </div>
  );
};

const LabelView = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center py-5 text-2xl font-semibold border-b border-gray-200">
      <span className="text-gray-700">{label}</span>
      <span className="text-gray-900">{value}</span>
    </div>
  );
};

export default App;
