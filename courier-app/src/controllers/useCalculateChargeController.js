import { useState, useEffect } from "react";

const API_BASE = import.meta.env.VITE_API_BASE;

export const useCalculateChargeController = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [deliveryType, setDeliveryType] = useState("");
  const [productType, setProductType] = useState("");
  const [weight, setWeight] = useState("");

  const [cities, setCities] = useState([]);
  const [deliveryTypes, setDeliveryTypes] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [weights, setWeights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [calculationResult, setCalculationResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
      
        const citiesRes = await fetch(`${API_BASE}/cities`);
        const citiesData = await citiesRes.json();
        setCities(citiesData);

   
        const deliveryRes = await fetch(`${API_BASE}/deliverytypes`);
        const deliveryData = await deliveryRes.json();
        setDeliveryTypes(deliveryData);

    
        const productRes = await fetch(`${API_BASE}/producttypes`);
        const productData = await productRes.json();
        setProductTypes(productData);

       
        const weightRes = await fetch(`${API_BASE}/weights`);
        const weightData = await weightRes.json();
        setWeights(weightData);

      } catch (error) {
        console.error("Error fetching calculation data:", error);
      
        setCities(["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Sylhet", "Barisal"]);
        setDeliveryTypes(["Standard", "Express", "Overnight"]);
        setProductTypes(["Parcel", "Document", "Heavy Goods"]);
        setWeights(["0-0.5kg", "0.5-2kg", "2-5kg", "5kg+"]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCalculate = async () => {
    if (!fromCity || !toCity || !deliveryType || !productType || !weight) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/calculate-charge`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fromCity, toCity, deliveryType, productType, weight }),
      });

      if (!response.ok) throw new Error("Calculation failed");

      const result = await response.json();
      console.log("Calculation successful:", result);
      setCalculationResult(result);
    } catch (error) {
      console.error("Calculation error:", error);
     
      const fallback = {
        amount: 150,
        estimatedDays: "2-3 Days",
        from: fromCity,
        to: toCity,
        type: deliveryType,
        weight: weight
      };
      console.log("Showing fallback result:", fallback);
      setCalculationResult(fallback);
    }
  };

  return {
    fromCity, setFromCity,
    toCity, setToCity,
    deliveryType, setDeliveryType,
    productType, setProductType,
    weight, setWeight,
    cities, deliveryTypes, productTypes, weights,
    handleCalculate,
    isLoading,
    calculationResult
  };
};
