import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <LabelView label="会員番号" value="08016971552" />
        <LabelView label="購入金額" value="08016971552" />
        <LabelView label="SBUserID" value="09000000013" />
        <button className="mt-6 w-full text-xl font-bold bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
          VectorBTN
        </button>
      </div>
    </div>
  );
};

const LabelView = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center py-4 text-xl font-bold">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
};

export default App;
