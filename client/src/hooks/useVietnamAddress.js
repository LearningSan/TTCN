import { useEffect, useState } from "react";

export default function useVietnamAddress() {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [provinceCode, setProvinceCode] = useState("");
  const [districtCode, setDistrictCode] = useState("");

  // Load tỉnh từ backend
  useEffect(() => {
    fetch("https://www.onlysantech.id.vn/api/addressJson/provinces")
      .then(res => res.json())
      .then(setProvinces)
      .catch(console.error);
  }, []);

  // Khi chọn tỉnh → load quận
  useEffect(() => {
    if (!provinceCode) return;

    fetch(`https://www.onlysantech.id.vn/api/addressJson/districts/${provinceCode}`)
      .then(res => res.json())
      .then(data => {
        setDistricts(data);
        setWards([]); // reset phường
      })
      .catch(console.error);
  }, [provinceCode]);

  // Khi chọn quận → load phường
  useEffect(() => {
    if (!districtCode) return;

    fetch(`https://www.onlysantech.id.vn/api/addressJson/wards/${districtCode}`)
      .then(res => res.json())
      .then(setWards)
      .catch(console.error);
  }, [districtCode]);

  return {
    provinces,
    districts,
    wards,
    setProvinceCode,
    setDistrictCode,
  };
}
