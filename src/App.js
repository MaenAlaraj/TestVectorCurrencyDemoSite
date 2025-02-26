import React from "react";

const App = () => {
  return (
    <div className="p-4 space-y-4 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-md w-80">
        <LabelView label="会員番号" value="08016971552" />
        <LabelView label="購入金額" value="100" />
        <LabelView label="SBUserID" value="09000000013" />
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          VectorBTN
        </button>
      </div>
    </div>
  );
};

const LabelView = ({ label, value }) => {
  return (
    <div className="flex justify-between py-2 border-b">
      <span className="font-semibold">{label}</span>
      <span>{value}</span>
    </div>
  );
};

export default App;
