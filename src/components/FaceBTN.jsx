// components/FaceBTN.jsx
import React from "react";
import { setMessage } from "../utils"; // Import setMessage from utils.js

const FaceBTN = ({ memberId, purchaseAmount, sbUserId, storeCode }) => {
  const handleButtonClick = async () => {
    console.log("[Face Recognition]: Authentication initiated.");









    try {
        const resultJsonString = await window.FaceCaptureInterface.getFace();
        console.log("[FaceButton]: Face data received:", resultJsonString);
  
        if (!resultJsonString) {
          setMessage("顔が検出されませんでした。もう一度試してください。", "showDialog");
          return;
        }
        
        const resultJsonObject = JSON.parse(resultJsonString);
        const facesArray = resultJsonObject.Faces;
        const numberOfFaces = facesArray.length;
        
        if (numberOfFaces === 0) {
          setMessage("顔を認証できませんでした。もう一度試してください。", "showDialog");
        } else if (numberOfFaces === 1) {
          console.log("[FaceButton]:Captured Nr. of Faces:", numberOfFaces);
          const base64String = facesArray[0].image64;
          console.log("[FaceButton]:base64String value is:", base64String);
          await window.CCWalletInterface.VectorCurrencyManagement(base64String,purchaseAmount,sbUserId, storeCode);
        } else if (numberOfFaces > 1) {
          setMessage("複数の顔が検出されました。もう一度試してください。", "showDialog");
        }
      } catch (error) {
        setMessage(`[FaceButton]エラーが発生しました: ${error.message}`, "showDialog");
      }











  };

  return (
    <button
      onClick={handleButtonClick}
      className="w-full text-2xl font-bold bg-green-600 text-white py-4 rounded-xl hover:bg-green-700 transition-all shadow-md mt-4"
    >
      Face
    </button>
  );
};

export default FaceBTN;
