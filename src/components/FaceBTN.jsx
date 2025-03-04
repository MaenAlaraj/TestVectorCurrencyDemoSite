// components/FaceBTN.jsx
import { setMessage } from "../utils"; // Import setMessage from utils.js
import React, { useState } from "react"; // Import useState

const FaceBTN = ({ memberId, purchaseAmount, sbUserId, storeCode }) => {
     // State to hold the base64 image data
  const [faceImage, setFaceImage] = useState(null);


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


            // Set the base64 image to state
            setFaceImage(base64String);

            await window.CCWalletInterface.VectorCurrencyManagement(memberId,purchaseAmount,sbUserId, storeCode, base64String);

        } else if (numberOfFaces > 1) {
          setMessage("複数の顔が検出されました。もう一度試してください。", "showDialog");
        }
      } catch (error) {
        setMessage(`[FaceButton]エラーが発生しました: ${error.message}`, "showDialog");
      }











  };

  return (
    <div className="w-full text-center">
    <button
      onClick={handleButtonClick}
      className="w-full text-2xl font-bold bg-green-600 text-white py-4 rounded-xl hover:bg-green-700 transition-all shadow-md mt-4"
    >
      Face
    </button>

    {/* Display the face image if available */}
    {faceImage && (
      <div className="mt-6">
        <img
          src={`data:image/jpeg;base64,${faceImage}`}
          alt="Captured Face"
          className="rounded-lg shadow-lg max-w-full max-h-[400px] object-cover mx-auto mt-4"
        />
      </div>
    )}
  </div>












  );
};

export default FaceBTN;
