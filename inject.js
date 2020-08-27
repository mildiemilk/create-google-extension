(function () {
  const mapField = {
    vehicle_body_type: "นั่งสามตอน",
    vehicle_brand: "T0Y0TA",
    vehicle_car_weight: "1750 กก.",
    vehicle_chassis_location: "หลังขวา",
    vehicle_chassis_number: "MR0ZX69G000108349",
    vehicle_color: "ขาว",
    vehicle_displacement: "2694",
    vehicle_engine_brand: "T0Y0TA",
    vehicle_engine_location: "ซ้ายเครื่อง",
    vehicle_engine_number: "2TR=7384245",
    vehicle_fuel_type: "แก๊ส+เขนซิน",
    vehicle_gas_number: "000705",
    vehicle_gvw: "1750",
    vehicle_hp: "160",
    vehicle_license_number: "1กศ 8744",
    vehicle_license_province: "กรงเทพมหานคร",
    vehicle_model: "TGN61R~NKPSKT A8",
    vehicle_model_year: "2012",
    vehicle_piston: "4",
    vehicle_register_date: "21 มีนาคม 2556",
    vehicle_seat_number: "7",
    vehicle_shaft: "2 เพลา 4 ล้อ ยาง 4 เส้น",
    vehicle_shaft_weight: "",
    vehicle_short_type: "1",
    vehicle_type: "รถยนต์นั่งส่วนขุคคลไม่เกิน 7 คน"
  }

  Object.keys(mapField).map((item) => {
    const field = document.getElementById(item)
    if (field) {
      field.value = mapField[item];
    }
  })
})();
