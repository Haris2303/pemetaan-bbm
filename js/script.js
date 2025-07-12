// Tunggu hingga peta terbentuk
window.addEventListener("load", () => {
  document.getElementById("searchInput").value = "";

  const map = window.map; // pastikan map tersedia secara global

  // Ambil interaksi scroll zoom
  let scrollZoomInteraction = map
    .getInteractions()
    .getArray()
    .find((i) => i instanceof ol.interaction.MouseWheelZoom);

  // Fungsi disable
  function disableScrollZoom() {
    if (scrollZoomInteraction) scrollZoomInteraction.setActive(false);
    enableZoomBtn.classList.remove("hidden");
    disableZoomBtn.classList.add("hidden");
  }

  // Fungsi enable
  function enableScrollZoom() {
    if (scrollZoomInteraction) scrollZoomInteraction.setActive(true);
    enableZoomBtn.classList.add("hidden");
    disableZoomBtn.classList.remove("hidden");
  }

  // Tombol
  const enableZoomBtn = document.getElementById("enableZoom");
  const disableZoomBtn = document.getElementById("disableZoom");

  enableZoomBtn.addEventListener("click", enableScrollZoom);
  disableZoomBtn.addEventListener("click", disableScrollZoom);

  // Nonaktifkan saat awal
  disableScrollZoom();

  // hitung jarak
  let koordinatAwal = null;
  let koordinatAkhir = null;
  let jarakAktif = false;

  document.getElementById("hitungJarak").addEventListener("click", function () {
    alert("Klik dua titik di peta untuk menghitung jarak.");
    jarakAktif = true;
    koordinatAwal = null;
    koordinatAkhir = null;
  });

  map.on("click", function (evt) {
    if (!jarakAktif) return;

    evt.preventDefault(); // cegah interaksi layer

    if (!koordinatAwal) {
      koordinatAwal = evt.coordinate;
    } else {
      koordinatAkhir = evt.coordinate;
      const lonLat1 = ol.proj.toLonLat(koordinatAwal);
      const lonLat2 = ol.proj.toLonLat(koordinatAkhir);

      const jarak = hitungJarakHaversine(lonLat1, lonLat2);
      alert("Jarak antara dua titik: " + jarak.toFixed(2) + " km");

      jarakAktif = false;
      koordinatAwal = null;
      koordinatAkhir = null;
    }
  });

  function hitungJarakHaversine(coord1, coord2) {
    const R = 6371; // radius bumi (km)
    const rad = Math.PI / 180;
    const dLat = (coord2[1] - coord1[1]) * rad;
    const dLon = (coord2[0] - coord1[0]) * rad;
    const lat1 = coord1[1] * rad;
    const lat2 = coord2[1] * rad;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }
});

const distanceData = [
  {
    inputID: "Pertashop depan Toko Metro",
    targetID: "pertashop pasar baru modern rufei",
    distanceKM: 924.174792440621,
  },
  {
    inputID: "Pertashop depan Toko Metro",
    targetID: "pertashop Jalan Trikora Tampa Garam",
    distanceKM: 2365.86275149887,
  },
  {
    inputID: "Pertashop depan Toko Metro",
    targetID: "pertashop Bambu Kuning",
    distanceKM: 9742.99802120851,
  },
  {
    inputID: "Pertashop depan Toko Metro",
    targetID: "Pertashop Jalan Sungai Kamundan",
    distanceKM: 8628.68166890788,
  },
  {
    inputID: "Pertashop depan Toko Metro",
    targetID: "Pertashop Kilo 8",
    distanceKM: 5694.91886392404,
  },
  {
    inputID: "Pertashop depan Toko Metro",
    targetID: "SPBU Kilo 9",
    distanceKM: 7194.1535884239,
  },
  {
    inputID: "Pertashop depan Toko Metro",
    targetID: "SPBU kilo 16",
    distanceKM: 11860.7446510072,
  },
  {
    inputID: "Pertashop depan Toko Metro",
    targetID: "SPBU HBM",
    distanceKM: 4311.40376188756,
  },
  {
    inputID: "Pertashop depan Toko Metro",
    targetID: "SPBU Pasar Baru",
    distanceKM: 3065.55868264992,
  },
  {
    inputID: "Pertashop depan Toko Metro",
    targetID: "SPBU Klaligi",
    distanceKM: 3046.35989597903,
  },
  {
    inputID: "Pertashop depan Toko Metro",
    targetID: "SPBU JL. Ahmad Yani",
    distanceKM: 2090.98174512478,
  },
  {
    inputID: "Pertashop depan Toko Metro",
    targetID: "SPBU kampung Baru",
    distanceKM: 927.829829192414,
  },
  {
    inputID: "Pertashop depan Toko Metro",
    targetID: "SPBU Jembatan Puri",
    distanceKM: 2964.90141055956,
  },
  {
    inputID: "Pertashop depan Toko Metro",
    targetID: "SPBU UT KM 13",
    distanceKM: 10428.184384689,
  },
  {
    inputID: "pertashop pasar baru modern rufei",
    targetID: "Pertashop depan Toko Metro",
    distanceKM: 924.174792440621,
  },
  {
    inputID: "pertashop pasar baru modern rufei",
    targetID: "pertashop Jalan Trikora Tampa Garam",
    distanceKM: 1445.16858293141,
  },
  {
    inputID: "pertashop pasar baru modern rufei",
    targetID: "pertashop Bambu Kuning",
    distanceKM: 10328.5148022778,
  },
  {
    inputID: "pertashop pasar baru modern rufei",
    targetID: "Pertashop Jalan Sungai Kamundan",
    distanceKM: 9179.3085277053,
  },
  {
    inputID: "pertashop pasar baru modern rufei",
    targetID: "Pertashop Kilo 8",
    distanceKM: 6309.26203263132,
  },
  {
    inputID: "pertashop pasar baru modern rufei",
    targetID: "SPBU Kilo 9",
    distanceKM: 7814.05856358233,
  },
  {
    inputID: "pertashop pasar baru modern rufei",
    targetID: "SPBU kilo 16",
    distanceKM: 12602.366413611,
  },
  {
    inputID: "pertashop pasar baru modern rufei",
    targetID: "SPBU HBM",
    distanceKM: 5038.96389614243,
  },
  {
    inputID: "pertashop pasar baru modern rufei",
    targetID: "SPBU Pasar Baru",
    distanceKM: 3940.56252636857,
  },
  {
    inputID: "pertashop pasar baru modern rufei",
    targetID: "SPBU Klaligi",
    distanceKM: 3922.01802170111,
  },
  {
    inputID: "pertashop pasar baru modern rufei",
    targetID: "SPBU JL. Ahmad Yani",
    distanceKM: 2987.00929583964,
  },
  {
    inputID: "pertashop pasar baru modern rufei",
    targetID: "SPBU kampung Baru",
    distanceKM: 1851.93259336016,
  },
  {
    inputID: "pertashop pasar baru modern rufei",
    targetID: "SPBU Jembatan Puri",
    distanceKM: 3859.77982166908,
  },
  {
    inputID: "pertashop pasar baru modern rufei",
    targetID: "SPBU UT KM 13",
    distanceKM: 11121.4010541283,
  },
  {
    inputID: "pertashop Jalan Trikora Tampa Garam",
    targetID: "Pertashop depan Toko Metro",
    distanceKM: 2365.86275149887,
  },
  {
    inputID: "pertashop Jalan Trikora Tampa Garam",
    targetID: "pertashop pasar baru modern rufei",
    distanceKM: 1445.16858293141,
  },
  {
    inputID: "pertashop Jalan Trikora Tampa Garam",
    targetID: "pertashop Bambu Kuning",
    distanceKM: 11438.7340967837,
  },
  {
    inputID: "pertashop Jalan Trikora Tampa Garam",
    targetID: "Pertashop Jalan Sungai Kamundan",
    distanceKM: 10256.8858280581,
  },
  {
    inputID: "pertashop Jalan Trikora Tampa Garam",
    targetID: "Pertashop Kilo 8",
    distanceKM: 7491.11435998912,
  },
  {
    inputID: "pertashop Jalan Trikora Tampa Garam",
    targetID: "SPBU Kilo 9",
    distanceKM: 8984.14976300065,
  },
  {
    inputID: "pertashop Jalan Trikora Tampa Garam",
    targetID: "SPBU kilo 16",
    distanceKM: 13884.1094631366,
  },
  {
    inputID: "pertashop Jalan Trikora Tampa Garam",
    targetID: "SPBU HBM",
    distanceKM: 6348.15671583162,
  },
  {
    inputID: "pertashop Jalan Trikora Tampa Garam",
    targetID: "SPBU Pasar Baru",
    distanceKM: 5369.29582228912,
  },
  {
    inputID: "pertashop Jalan Trikora Tampa Garam",
    targetID: "SPBU Klaligi",
    distanceKM: 5351.1692494319,
  },
  {
    inputID: "pertashop Jalan Trikora Tampa Garam",
    targetID: "SPBU JL. Ahmad Yani",
    distanceKM: 4427.78205173395,
  },
  {
    inputID: "pertashop Jalan Trikora Tampa Garam",
    targetID: "SPBU kampung Baru",
    distanceKM: 3292.85408572461,
  },
  {
    inputID: "pertashop Jalan Trikora Tampa Garam",
    targetID: "SPBU Jembatan Puri",
    distanceKM: 5298.65408936852,
  },
  {
    inputID: "pertashop Jalan Trikora Tampa Garam",
    targetID: "SPBU UT KM 13",
    distanceKM: 12353.1184607319,
  },
  {
    inputID: "pertashop Bambu Kuning",
    targetID: "Pertashop depan Toko Metro",
    distanceKM: 9742.99802120851,
  },
  {
    inputID: "pertashop Bambu Kuning",
    targetID: "pertashop pasar baru modern rufei",
    distanceKM: 10328.5148022778,
  },
  {
    inputID: "pertashop Bambu Kuning",
    targetID: "pertashop Jalan Trikora Tampa Garam",
    distanceKM: 11438.7340967837,
  },
  {
    inputID: "pertashop Bambu Kuning",
    targetID: "Pertashop Jalan Sungai Kamundan",
    distanceKM: 1219.5805515686,
  },
  {
    inputID: "pertashop Bambu Kuning",
    targetID: "Pertashop Kilo 8",
    distanceKM: 4050.31966195676,
  },
  {
    inputID: "pertashop Bambu Kuning",
    targetID: "SPBU Kilo 9",
    distanceKM: 2569.24338869316,
  },
  {
    inputID: "pertashop Bambu Kuning",
    targetID: "SPBU kilo 16",
    distanceKM: 3488.10845812326,
  },
  {
    inputID: "pertashop Bambu Kuning",
    targetID: "SPBU HBM",
    distanceKM: 5573.06509465162,
  },
  {
    inputID: "pertashop Bambu Kuning",
    targetID: "SPBU Pasar Baru",
    distanceKM: 7302.3966470161,
  },
  {
    inputID: "pertashop Bambu Kuning",
    targetID: "SPBU Klaligi",
    distanceKM: 7320.94946599302,
  },
  {
    inputID: "pertashop Bambu Kuning",
    targetID: "SPBU JL. Ahmad Yani",
    distanceKM: 8138.37450925352,
  },
  {
    inputID: "pertashop Bambu Kuning",
    targetID: "SPBU kampung Baru",
    distanceKM: 9197.47242430154,
  },
  {
    inputID: "pertashop Bambu Kuning",
    targetID: "SPBU Jembatan Puri",
    distanceKM: 7556.53676666693,
  },
  {
    inputID: "pertashop Bambu Kuning",
    targetID: "SPBU UT KM 13",
    distanceKM: 1837.87975847107,
  },
  {
    inputID: "Pertashop Jalan Sungai Kamundan",
    targetID: "Pertashop depan Toko Metro",
    distanceKM: 8628.68166890788,
  },
  {
    inputID: "Pertashop Jalan Sungai Kamundan",
    targetID: "pertashop pasar baru modern rufei",
    distanceKM: 9179.3085277053,
  },
  {
    inputID: "Pertashop Jalan Sungai Kamundan",
    targetID: "pertashop Jalan Trikora Tampa Garam",
    distanceKM: 10256.8858280581,
  },
  {
    inputID: "Pertashop Jalan Sungai Kamundan",
    targetID: "pertashop Bambu Kuning",
    distanceKM: 1219.5805515686,
  },
  {
    inputID: "Pertashop Jalan Sungai Kamundan",
    targetID: "Pertashop Kilo 8",
    distanceKM: 2977.01969220053,
  },
  {
    inputID: "Pertashop Jalan Sungai Kamundan",
    targetID: "SPBU Kilo 9",
    distanceKM: 1609.49805863227,
  },
  {
    inputID: "Pertashop Jalan Sungai Kamundan",
    targetID: "SPBU kilo 16",
    distanceKM: 4512.9663932785,
  },
  {
    inputID: "Pertashop Jalan Sungai Kamundan",
    targetID: "SPBU HBM",
    distanceKM: 4571.08471210892,
  },
  {
    inputID: "Pertashop Jalan Sungai Kamundan",
    targetID: "SPBU Pasar Baru",
    distanceKM: 6343.53830644363,
  },
  {
    inputID: "Pertashop Jalan Sungai Kamundan",
    targetID: "SPBU Klaligi",
    distanceKM: 6361.04770486105,
  },
  {
    inputID: "Pertashop Jalan Sungai Kamundan",
    targetID: "SPBU JL. Ahmad Yani",
    distanceKM: 7122.16121188048,
  },
  {
    inputID: "Pertashop Jalan Sungai Kamundan",
    targetID: "SPBU kampung Baru",
    distanceKM: 8129.93289599147,
  },
  {
    inputID: "Pertashop Jalan Sungai Kamundan",
    targetID: "SPBU Jembatan Puri",
    distanceKM: 6607.15884530996,
  },
  {
    inputID: "Pertashop Jalan Sungai Kamundan",
    targetID: "SPBU UT KM 13",
    distanceKM: 2777.14670782013,
  },
  {
    inputID: "Pertashop Kilo 8",
    targetID: "Pertashop depan Toko Metro",
    distanceKM: 5694.91886392404,
  },
  {
    inputID: "Pertashop Kilo 8",
    targetID: "pertashop pasar baru modern rufei",
    distanceKM: 6309.26203263132,
  },
  {
    inputID: "Pertashop Kilo 8",
    targetID: "pertashop Jalan Trikora Tampa Garam",
    distanceKM: 7491.11435998912,
  },
  {
    inputID: "Pertashop Kilo 8",
    targetID: "pertashop Bambu Kuning",
    distanceKM: 4050.31966195676,
  },
  {
    inputID: "Pertashop Kilo 8",
    targetID: "Pertashop Jalan Sungai Kamundan",
    distanceKM: 2977.01969220053,
  },
  {
    inputID: "Pertashop Kilo 8",
    targetID: "SPBU Kilo 9",
    distanceKM: 1504.97288817386,
  },
  {
    inputID: "Pertashop Kilo 8",
    targetID: "SPBU kilo 16",
    distanceKM: 6473.36424543906,
  },
  {
    inputID: "Pertashop Kilo 8",
    targetID: "SPBU HBM",
    distanceKM: 1631.51248587389,
  },
  {
    inputID: "Pertashop Kilo 8",
    targetID: "SPBU Pasar Baru",
    distanceKM: 3420.00491982844,
  },
  {
    inputID: "Pertashop Kilo 8",
    targetID: "SPBU Klaligi",
    distanceKM: 3436.14401636127,
  },
  {
    inputID: "Pertashop Kilo 8",
    targetID: "SPBU JL. Ahmad Yani",
    distanceKM: 4150.76125854612,
  },
  {
    inputID: "Pertashop Kilo 8",
    targetID: "SPBU kampung Baru",
    distanceKM: 5157.64326462857,
  },
  {
    inputID: "Pertashop Kilo 8",
    targetID: "SPBU Jembatan Puri",
    distanceKM: 3690.4066263234,
  },
  {
    inputID: "Pertashop Kilo 8",
    targetID: "SPBU UT KM 13",
    distanceKM: 4874.50741280248,
  },
  {
    inputID: "SPBU Kilo 9",
    targetID: "Pertashop depan Toko Metro",
    distanceKM: 7194.1535884239,
  },
  {
    inputID: "SPBU Kilo 9",
    targetID: "pertashop pasar baru modern rufei",
    distanceKM: 7814.05856358233,
  },
  {
    inputID: "SPBU Kilo 9",
    targetID: "pertashop Jalan Trikora Tampa Garam",
    distanceKM: 8984.14976300065,
  },
  {
    inputID: "SPBU Kilo 9",
    targetID: "pertashop Bambu Kuning",
    distanceKM: 2569.24338869316,
  },
  {
    inputID: "SPBU Kilo 9",
    targetID: "Pertashop Jalan Sungai Kamundan",
    distanceKM: 1609.49805863227,
  },
  {
    inputID: "SPBU Kilo 9",
    targetID: "Pertashop Kilo 8",
    distanceKM: 1504.97288817386,
  },
  {
    inputID: "SPBU Kilo 9",
    targetID: "SPBU kilo 16",
    distanceKM: 5088.08719178483,
  },
  {
    inputID: "SPBU Kilo 9",
    targetID: "SPBU HBM",
    distanceKM: 3007.73392020549,
  },
  {
    inputID: "SPBU Kilo 9",
    targetID: "SPBU Pasar Baru",
    distanceKM: 4757.97224819236,
  },
  {
    inputID: "SPBU Kilo 9",
    targetID: "SPBU Klaligi",
    distanceKM: 4775.98583843481,
  },
  {
    inputID: "SPBU Kilo 9",
    targetID: "SPBU JL. Ahmad Yani",
    distanceKM: 5572.51119537295,
  },
  {
    inputID: "SPBU Kilo 9",
    targetID: "SPBU kampung Baru",
    distanceKM: 6629.72331568747,
  },
  {
    inputID: "SPBU Kilo 9",
    targetID: "SPBU Jembatan Puri",
    distanceKM: 5017.89135356756,
  },
  {
    inputID: "SPBU Kilo 9",
    targetID: "SPBU UT KM 13",
    distanceKM: 3426.44688525128,
  },
  {
    inputID: "SPBU kilo 16",
    targetID: "Pertashop depan Toko Metro",
    distanceKM: 11860.7446510072,
  },
  {
    inputID: "SPBU kilo 16",
    targetID: "pertashop pasar baru modern rufei",
    distanceKM: 12602.366413611,
  },
  {
    inputID: "SPBU kilo 16",
    targetID: "pertashop Jalan Trikora Tampa Garam",
    distanceKM: 13884.1094631366,
  },
  {
    inputID: "SPBU kilo 16",
    targetID: "pertashop Bambu Kuning",
    distanceKM: 3488.10845812326,
  },
  {
    inputID: "SPBU kilo 16",
    targetID: "Pertashop Jalan Sungai Kamundan",
    distanceKM: 4512.9663932785,
  },
  {
    inputID: "SPBU kilo 16",
    targetID: "Pertashop Kilo 8",
    distanceKM: 6473.36424543906,
  },
  {
    inputID: "SPBU kilo 16",
    targetID: "SPBU Kilo 9",
    distanceKM: 5088.08719178483,
  },
  {
    inputID: "SPBU kilo 16",
    targetID: "SPBU HBM",
    distanceKM: 7563.95713900115,
  },
  {
    inputID: "SPBU kilo 16",
    targetID: "SPBU Pasar Baru",
    distanceKM: 8965.12221759135,
  },
  {
    inputID: "SPBU kilo 16",
    targetID: "SPBU Klaligi",
    distanceKM: 8985.4798438417,
  },
  {
    inputID: "SPBU kilo 16",
    targetID: "SPBU JL. Ahmad Yani",
    distanceKM: 9936.03265357732,
  },
  {
    inputID: "SPBU kilo 16",
    targetID: "SPBU kampung Baru",
    distanceKM: 11133.0798878812,
  },
  {
    inputID: "SPBU kilo 16",
    targetID: "SPBU Jembatan Puri",
    distanceKM: 9164.23827362159,
  },
  {
    inputID: "SPBU kilo 16",
    targetID: "SPBU UT KM 13",
    distanceKM: 1742.07620622106,
  },
  {
    inputID: "SPBU HBM",
    targetID: "Pertashop depan Toko Metro",
    distanceKM: 4311.40376188756,
  },
  {
    inputID: "SPBU HBM",
    targetID: "pertashop pasar baru modern rufei",
    distanceKM: 5038.96389614243,
  },
  {
    inputID: "SPBU HBM",
    targetID: "pertashop Jalan Trikora Tampa Garam",
    distanceKM: 6348.15671583162,
  },
  {
    inputID: "SPBU HBM",
    targetID: "pertashop Bambu Kuning",
    distanceKM: 5573.06509465162,
  },
  {
    inputID: "SPBU HBM",
    targetID: "Pertashop Jalan Sungai Kamundan",
    distanceKM: 4571.08471210892,
  },
  {
    inputID: "SPBU HBM",
    targetID: "Pertashop Kilo 8",
    distanceKM: 1631.51248587389,
  },
  {
    inputID: "SPBU HBM",
    targetID: "SPBU Kilo 9",
    distanceKM: 3007.73392020549,
  },
  {
    inputID: "SPBU HBM",
    targetID: "SPBU kilo 16",
    distanceKM: 7563.95713900115,
  },
  {
    inputID: "SPBU HBM",
    targetID: "SPBU Pasar Baru",
    distanceKM: 1788.57760171105,
  },
  {
    inputID: "SPBU HBM",
    targetID: "SPBU Klaligi",
    distanceKM: 1804.8201109372,
  },
  {
    inputID: "SPBU HBM",
    targetID: "SPBU JL. Ahmad Yani",
    distanceKM: 2565.34171618808,
  },
  {
    inputID: "SPBU HBM",
    targetID: "SPBU kampung Baru",
    distanceKM: 3658.37685272423,
  },
  {
    inputID: "SPBU HBM",
    targetID: "SPBU Jembatan Puri",
    distanceKM: 2058.91583054332,
  },
  {
    inputID: "SPBU HBM",
    targetID: "SPBU UT KM 13",
    distanceKM: 6118.79657802403,
  },
  {
    inputID: "SPBU Pasar Baru",
    targetID: "Pertashop depan Toko Metro",
    distanceKM: 3065.55868264992,
  },
  {
    inputID: "SPBU Pasar Baru",
    targetID: "pertashop pasar baru modern rufei",
    distanceKM: 3940.56252636857,
  },
  {
    inputID: "SPBU Pasar Baru",
    targetID: "pertashop Jalan Trikora Tampa Garam",
    distanceKM: 5369.29582228912,
  },
  {
    inputID: "SPBU Pasar Baru",
    targetID: "pertashop Bambu Kuning",
    distanceKM: 7302.3966470161,
  },
  {
    inputID: "SPBU Pasar Baru",
    targetID: "Pertashop Jalan Sungai Kamundan",
    distanceKM: 6343.53830644363,
  },
  {
    inputID: "SPBU Pasar Baru",
    targetID: "Pertashop Kilo 8",
    distanceKM: 3420.00491982844,
  },
  {
    inputID: "SPBU Pasar Baru",
    targetID: "SPBU Kilo 9",
    distanceKM: 4757.97224819236,
  },
  {
    inputID: "SPBU Pasar Baru",
    targetID: "SPBU kilo 16",
    distanceKM: 8965.12221759135,
  },
  {
    inputID: "SPBU Pasar Baru",
    targetID: "SPBU HBM",
    distanceKM: 1788.57760171105,
  },
  {
    inputID: "SPBU Pasar Baru",
    targetID: "SPBU Klaligi",
    distanceKM: 20.3790192614783,
  },
  {
    inputID: "SPBU Pasar Baru",
    targetID: "SPBU JL. Ahmad Yani",
    distanceKM: 993.572564327052,
  },
  {
    inputID: "SPBU Pasar Baru",
    targetID: "SPBU kampung Baru",
    distanceKM: 2219.37208930023,
  },
  {
    inputID: "SPBU Pasar Baru",
    targetID: "SPBU Jembatan Puri",
    distanceKM: 273.334565850621,
  },
  {
    inputID: "SPBU Pasar Baru",
    targetID: "SPBU UT KM 13",
    distanceKM: 7663.44456091806,
  },
  {
    inputID: "SPBU Klaligi",
    targetID: "Pertashop depan Toko Metro",
    distanceKM: 3046.35989597903,
  },
  {
    inputID: "SPBU Klaligi",
    targetID: "pertashop pasar baru modern rufei",
    distanceKM: 3922.01802170111,
  },
  {
    inputID: "SPBU Klaligi",
    targetID: "pertashop Jalan Trikora Tampa Garam",
    distanceKM: 5351.1692494319,
  },
  {
    inputID: "SPBU Klaligi",
    targetID: "pertashop Bambu Kuning",
    distanceKM: 7320.94946599302,
  },
  {
    inputID: "SPBU Klaligi",
    targetID: "Pertashop Jalan Sungai Kamundan",
    distanceKM: 6361.04770486105,
  },
  {
    inputID: "SPBU Klaligi",
    targetID: "Pertashop Kilo 8",
    distanceKM: 3436.14401636127,
  },
  {
    inputID: "SPBU Klaligi",
    targetID: "SPBU Kilo 9",
    distanceKM: 4775.98583843481,
  },
  {
    inputID: "SPBU Klaligi",
    targetID: "SPBU kilo 16",
    distanceKM: 8985.4798438417,
  },
  {
    inputID: "SPBU Klaligi",
    targetID: "SPBU HBM",
    distanceKM: 1804.8201109372,
  },
  {
    inputID: "SPBU Klaligi",
    targetID: "SPBU Pasar Baru",
    distanceKM: 20.3790192614783,
  },
  {
    inputID: "SPBU Klaligi",
    targetID: "SPBU JL. Ahmad Yani",
    distanceKM: 973.528067080404,
  },
  {
    inputID: "SPBU Klaligi",
    targetID: "SPBU kampung Baru",
    distanceKM: 2199.38224286698,
  },
  {
    inputID: "SPBU Klaligi",
    targetID: "SPBU Jembatan Puri",
    distanceKM: 259.718177707735,
  },
  {
    inputID: "SPBU Klaligi",
    targetID: "SPBU UT KM 13",
    distanceKM: 7683.47423731483,
  },
  {
    inputID: "SPBU JL. Ahmad Yani",
    targetID: "Pertashop depan Toko Metro",
    distanceKM: 2090.98174512478,
  },
  {
    inputID: "SPBU JL. Ahmad Yani",
    targetID: "pertashop pasar baru modern rufei",
    distanceKM: 2987.00929583964,
  },
  {
    inputID: "SPBU JL. Ahmad Yani",
    targetID: "pertashop Jalan Trikora Tampa Garam",
    distanceKM: 4427.78205173395,
  },
  {
    inputID: "SPBU JL. Ahmad Yani",
    targetID: "pertashop Bambu Kuning",
    distanceKM: 8138.37450925352,
  },
  {
    inputID: "SPBU JL. Ahmad Yani",
    targetID: "Pertashop Jalan Sungai Kamundan",
    distanceKM: 7122.16121188048,
  },
  {
    inputID: "SPBU JL. Ahmad Yani",
    targetID: "Pertashop Kilo 8",
    distanceKM: 4150.76125854612,
  },
  {
    inputID: "SPBU JL. Ahmad Yani",
    targetID: "SPBU Kilo 9",
    distanceKM: 5572.51119537295,
  },
  {
    inputID: "SPBU JL. Ahmad Yani",
    targetID: "SPBU kilo 16",
    distanceKM: 9936.03265357732,
  },
  {
    inputID: "SPBU JL. Ahmad Yani",
    targetID: "SPBU HBM",
    distanceKM: 2565.34171618808,
  },
  {
    inputID: "SPBU JL. Ahmad Yani",
    targetID: "SPBU Pasar Baru",
    distanceKM: 993.572564327052,
  },
  {
    inputID: "SPBU JL. Ahmad Yani",
    targetID: "SPBU Klaligi",
    distanceKM: 973.528067080404,
  },
  {
    inputID: "SPBU JL. Ahmad Yani",
    targetID: "SPBU kampung Baru",
    distanceKM: 1226.00921736789,
  },
  {
    inputID: "SPBU JL. Ahmad Yani",
    targetID: "SPBU Jembatan Puri",
    distanceKM: 874.142592660632,
  },
  {
    inputID: "SPBU JL. Ahmad Yani",
    targetID: "SPBU UT KM 13",
    distanceKM: 8598.80185613729,
  },
  {
    inputID: "SPBU kampung Baru",
    targetID: "Pertashop depan Toko Metro",
    distanceKM: 927.829829192414,
  },
  {
    inputID: "SPBU kampung Baru",
    targetID: "pertashop pasar baru modern rufei",
    distanceKM: 1851.93259336016,
  },
  {
    inputID: "SPBU kampung Baru",
    targetID: "pertashop Jalan Trikora Tampa Garam",
    distanceKM: 3292.85408572461,
  },
  {
    inputID: "SPBU kampung Baru",
    targetID: "pertashop Bambu Kuning",
    distanceKM: 9197.47242430154,
  },
  {
    inputID: "SPBU kampung Baru",
    targetID: "Pertashop Jalan Sungai Kamundan",
    distanceKM: 8129.93289599147,
  },
  {
    inputID: "SPBU kampung Baru",
    targetID: "Pertashop Kilo 8",
    distanceKM: 5157.64326462857,
  },
  {
    inputID: "SPBU kampung Baru",
    targetID: "SPBU Kilo 9",
    distanceKM: 6629.72331568747,
  },
  {
    inputID: "SPBU kampung Baru",
    targetID: "SPBU kilo 16",
    distanceKM: 11133.0798878812,
  },
  {
    inputID: "SPBU kampung Baru",
    targetID: "SPBU HBM",
    distanceKM: 3658.37685272423,
  },
  {
    inputID: "SPBU kampung Baru",
    targetID: "SPBU Pasar Baru",
    distanceKM: 2219.37208930023,
  },
  {
    inputID: "SPBU kampung Baru",
    targetID: "SPBU Klaligi",
    distanceKM: 2199.38224286698,
  },
  {
    inputID: "SPBU kampung Baru",
    targetID: "SPBU JL. Ahmad Yani",
    distanceKM: 1226.00921736789,
  },
  {
    inputID: "SPBU kampung Baru",
    targetID: "SPBU Jembatan Puri",
    distanceKM: 2085.84533570717,
  },
  {
    inputID: "SPBU kampung Baru",
    targetID: "SPBU UT KM 13",
    distanceKM: 9758.94188821208,
  },
  {
    inputID: "SPBU Jembatan Puri",
    targetID: "Pertashop depan Toko Metro",
    distanceKM: 2964.90141055956,
  },
  {
    inputID: "SPBU Jembatan Puri",
    targetID: "pertashop pasar baru modern rufei",
    distanceKM: 3859.77982166908,
  },
  {
    inputID: "SPBU Jembatan Puri",
    targetID: "pertashop Jalan Trikora Tampa Garam",
    distanceKM: 5298.65408936852,
  },
  {
    inputID: "SPBU Jembatan Puri",
    targetID: "pertashop Bambu Kuning",
    distanceKM: 7556.53676666693,
  },
  {
    inputID: "SPBU Jembatan Puri",
    targetID: "Pertashop Jalan Sungai Kamundan",
    distanceKM: 6607.15884530996,
  },
  {
    inputID: "SPBU Jembatan Puri",
    targetID: "Pertashop Kilo 8",
    distanceKM: 3690.4066263234,
  },
  {
    inputID: "SPBU Jembatan Puri",
    targetID: "SPBU Kilo 9",
    distanceKM: 5017.89135356756,
  },
  {
    inputID: "SPBU Jembatan Puri",
    targetID: "SPBU kilo 16",
    distanceKM: 9164.23827362159,
  },
  {
    inputID: "SPBU Jembatan Puri",
    targetID: "SPBU HBM",
    distanceKM: 2058.91583054332,
  },
  {
    inputID: "SPBU Jembatan Puri",
    targetID: "SPBU Pasar Baru",
    distanceKM: 273.334565850621,
  },
  {
    inputID: "SPBU Jembatan Puri",
    targetID: "SPBU Klaligi",
    distanceKM: 259.718177707735,
  },
  {
    inputID: "SPBU Jembatan Puri",
    targetID: "SPBU JL. Ahmad Yani",
    distanceKM: 874.142592660632,
  },
  {
    inputID: "SPBU Jembatan Puri",
    targetID: "SPBU kampung Baru",
    distanceKM: 2085.84533570717,
  },
  {
    inputID: "SPBU Jembatan Puri",
    targetID: "SPBU UT KM 13",
    distanceKM: 7886.68359353229,
  },
  {
    inputID: "SPBU UT KM 13",
    targetID: "Pertashop depan Toko Metro",
    distanceKM: 10428.184384689,
  },
  {
    inputID: "SPBU UT KM 13",
    targetID: "pertashop pasar baru modern rufei",
    distanceKM: 11121.4010541283,
  },
  {
    inputID: "SPBU UT KM 13",
    targetID: "pertashop Jalan Trikora Tampa Garam",
    distanceKM: 12353.1184607319,
  },
  {
    inputID: "SPBU UT KM 13",
    targetID: "pertashop Bambu Kuning",
    distanceKM: 1837.87975847107,
  },
  {
    inputID: "SPBU UT KM 13",
    targetID: "Pertashop Jalan Sungai Kamundan",
    distanceKM: 2777.14670782013,
  },
  {
    inputID: "SPBU UT KM 13",
    targetID: "Pertashop Kilo 8",
    distanceKM: 4874.50741280248,
  },
  {
    inputID: "SPBU UT KM 13",
    targetID: "SPBU Kilo 9",
    distanceKM: 3426.44688525128,
  },
  {
    inputID: "SPBU UT KM 13",
    targetID: "SPBU kilo 16",
    distanceKM: 1742.07620622106,
  },
  {
    inputID: "SPBU UT KM 13",
    targetID: "SPBU HBM",
    distanceKM: 6118.79657802403,
  },
  {
    inputID: "SPBU UT KM 13",
    targetID: "SPBU Pasar Baru",
    distanceKM: 7663.44456091806,
  },
  {
    inputID: "SPBU UT KM 13",
    targetID: "SPBU Klaligi",
    distanceKM: 7683.47423731483,
  },
  {
    inputID: "SPBU UT KM 13",
    targetID: "SPBU JL. Ahmad Yani",
    distanceKM: 8598.80185613729,
  },
  {
    inputID: "SPBU UT KM 13",
    targetID: "SPBU kampung Baru",
    distanceKM: 9758.94188821208,
  },
  {
    inputID: "SPBU UT KM 13",
    targetID: "SPBU Jembatan Puri",
    distanceKM: 7886.68359353229,
  },
];

const rowsPerPage = 5;
let currentPage = 1;
let filteredData = [...distanceData];

// Render table berdasarkan data dan halaman aktif
function renderTablePage(data, page) {
  const tbody = document.getElementById("tabel-jarak");
  tbody.innerHTML = "";

  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const slicedData = data.slice(start, end);

  slicedData.forEach(({ inputID, targetID, distanceKM }) => {
    const tr = document.createElement("tr");
    tr.className = "border-b";
    tr.innerHTML = `
      <td class="px-4 py-2">${inputID}</td>
      <td class="px-4 py-2">${targetID}</td>
      <td class="px-4 py-2">${(distanceKM / 1000).toFixed(2)} km</td>
    `;
    tbody.appendChild(tr);
  });

  // Update informasi halaman
  document.getElementById(
    "pageInfo"
  ).textContent = `Halaman ${page} dari ${Math.ceil(
    data.length / rowsPerPage
  )}`;
}

// Navigasi
document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderTablePage(filteredData, currentPage);
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  if (currentPage < Math.ceil(filteredData.length / rowsPerPage)) {
    currentPage++;
    renderTablePage(filteredData, currentPage);
  }
});

// Pencarian
document.getElementById("searchInput").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();

  filteredData = distanceData.filter(
    ({ inputID, targetID }) =>
      inputID.toLowerCase().includes(keyword) ||
      targetID.toLowerCase().includes(keyword)
  );

  currentPage = 1; // reset ke halaman pertama
  renderTablePage(filteredData, currentPage);
});

// Pertama kali tampilkan
renderTablePage(filteredData, currentPage);

const hero = document.getElementById("heroSlider");

const bgImages = [
  "url('./images/image.png')",
  "url('./images/pinMerah64px.png')",
];

let current = 0;

function changeBackground() {
  hero.style.backgroundImage = bgImages[current];
  current = (current + 1) % bgImages.length;
}

// Ganti background pertama saat halaman load
changeBackground();

// Slide otomatis setiap 5 detik
setInterval(changeBackground, 5000);
