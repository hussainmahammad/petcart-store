// src/components/product/DeliveryEstimate.jsx
import { useEffect, useState } from "react";
import siteConfig from "../../config/siteConfig.json";

const ORS_KEY = import.meta.env.VITE_ORS_API_KEY; // ✅ vite way
const WAREHOUSE = siteConfig.shop.warehouse;
const BUCKETS = siteConfig.shop.deliveryBuckets;

// 🔹 Map distance → delivery days
function getDeliveryDays(distanceKm) {
  for (const bucket of BUCKETS) {
    if (bucket.maxKm === null || distanceKm <= bucket.maxKm) {
      return bucket.days;
    }
  }
  return "Unavailable";
}

export default function DeliveryEstimate({ pincode }) {
  const [distance, setDistance] = useState(null);
  const [days, setDays] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔹 Convert pincode → lat/lon using OpenStreetMap Nominatim
  async function geocodePincode(pin) {
    const url = `https://nominatim.openstreetmap.org/search?postalcode=${pin}&country=India&format=json`;
    const res = await fetch(url, {
      headers: {
        "User-Agent": "petcart.shop/1.0 (your-email@example.com)", // Nominatim requires UA
      },
    });
    const data = await res.json();
    if (!data.length) throw new Error("Invalid pincode");
    const { lon, lat } = data[0];
    return [parseFloat(lon), parseFloat(lat)];
  }

  useEffect(() => {
    if (!pincode) return;

    async function fetchDistance() {
      setLoading(true);
      setError(null);
      try {
        // 1️⃣ Convert pincode → coordinates
        const userCoords = await geocodePincode(pincode);

        // 2️⃣ ORS Matrix API
        const url = "https://api.openrouteservice.org/v2/matrix/driving-car";
        const body = {
          locations: [WAREHOUSE.coordinates, userCoords],
          metrics: ["distance", "duration"],
        };

        const res = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: ORS_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        const data = await res.json();
        if (!data.distances) throw new Error("Could not fetch distance");

        const distanceKm = data.distances[0][1] / 1000; // meters → km
        setDistance(distanceKm.toFixed(1));
        setDays(getDeliveryDays(distanceKm));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDistance();
  }, [pincode]);

  if (!pincode)
    return (
      <div className="text-sm text-gray-500">
        Enter a pincode to see delivery estimate
      </div>
    );
  if (loading)
    return (
      <div className="text-sm text-gray-500">
        Calculating delivery estimate…
      </div>
    );
  if (error)
    return <div className="text-sm text-red-600">Error: {error}</div>;

  return (
    <div className="text-sm mt-2">
      {distance && (
        <div>
          Estimated delivery:{" "}
          <span className="font-semibold text-green-700">{days}</span>{" "}
          <span className="text-gray-500">
            ({distance} km from warehouse)
          </span>
        </div>
      )}
    </div>
  );
}
