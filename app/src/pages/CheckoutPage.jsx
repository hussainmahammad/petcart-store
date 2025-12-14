import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { X, Plus, MapPin } from "lucide-react";
import siteConfig from "../config/siteConfig.json";

const formatINR = (n) => `₹${Number(n || 0).toLocaleString("en-IN")}`;
const generateOrderId = () =>
  `ORD-${Date.now().toString().slice(-6)}-${Math.floor(
    Math.random() * 900 + 100
  )}`;

const TAX_PERCENT = 0;
const ORS_KEY = import.meta.env.VITE_ORS_API_KEY;
const WAREHOUSE = siteConfig.shop.warehouse;
const BUCKETS = siteConfig.shop.deliveryBuckets;

// Map distance → delivery days
function getDeliveryDays(distanceKm) {
  for (const bucket of BUCKETS) {
    if (bucket.maxKm === null || distanceKm <= bucket.maxKm) {
      return bucket.days;
    }
  }
  return "Unavailable";
}

// Map distance → delivery price
function getDeliveryPrice(distanceKm) {
  if (!distanceKm) return 50;
  if (distanceKm <= 5) return 20;
  if (distanceKm <= 10) return 30;
  if (distanceKm <= 20) return 40;
  if (distanceKm <= 50) return 50;
  if (distanceKm <= 100) return 75;
  if (distanceKm <= 200) return 100;
  if (distanceKm <= 300) return 120;
  if (distanceKm <= 500) return 150;
  if (distanceKm <= 700) return 200;
  if (distanceKm <= 1000) return 250;
  if (distanceKm <= 1500) return 300;
  return 350;
}

// Delivery Estimate Logic
function DeliveryEstimate({ pincode, setDistance, distance }) {
  const [days, setDays] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function geocodePincode(pin) {
    const url = `https://nominatim.openstreetmap.org/search?postalcode=${pin}&country=India&format=json`;
    const res = await fetch(url, {
      headers: {
        "User-Agent": "petcart.shop/1.0 (your-email@example.com)",
      },
    });
    const data = await res.json();
    if (!data.length) throw new Error("Invalid pincode");
    const { lon, lat } = data[0];
    return [parseFloat(lon), parseFloat(lat)];
  }

  useEffect(() => {
    if (!pincode) {
      setDistance(null);
      setDays(null);
      return;
    }

    async function fetchDistance() {
      setLoading(true);
      setError(null);
      try {
        const userCoords = await geocodePincode(pincode);
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

        const distanceKm = data.distances[0][1] / 1000;
        setDistance(distanceKm.toFixed(1));
        setDays(getDeliveryDays(distanceKm));
      } catch (err) {
        setDistance(null);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDistance();
  }, [pincode, setDistance]);

  if (!pincode)
    return (
      <div className="text-xs sm:text-sm text-gray-500">
        Enter a pincode to see delivery estimate
      </div>
    );
  if (loading)
    return (
      <div className="text-xs sm:text-sm text-gray-500">
        Calculating delivery estimate…
      </div>
    );
  if (error)
    return <div className="text-xs sm:text-sm text-red-600">Error: {error}</div>;

  return (
    <div className="text-xs sm:text-sm mt-2">
      {days && (
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

export default function CheckoutPage() {
  const navigate = useNavigate();
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  } = useCart();

  const [step, setStep] = useState(1);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  // Debug state changes
  useEffect(() => {
    console.log("CheckoutPage State Update:", { step, currentOrder });
    if (step === 4 && !currentOrder) {
      console.error("Step 4 reached but currentOrder is null");
    }
  }, [step, currentOrder]);

  // Address Selector State
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: "Home",
      name: "Hussain Mahammad",
      mobile: "09505452307",
      address: "12/3 Vivekananda nagar, Proddatur",
      landmark: "Hotel street backside of dargah street",
      state: "ANDHRA PRADESH",
      pincode: "516360",
      isDefault: true,
    },
    {
      id: 2,
      label: "Office",
      name: "Hussain",
      mobile: "9876543210",
      address: "456 Residency Road",
      landmark: "Near City Mall",
      state: "Karnataka",
      pincode: "560034",
      isDefault: false,
    },
  ]);

  // Coupons from CouponsModal.jsx
  const [coupons] = useState([
    {
      id: 1,
      code: "WELCOME20",
      discount: "20% OFF",
      minOrder: "₹2500",
      expiry: "2025-12-15",
    },
    {
      id: 2,
      code: "LOYAL15",
      discount: "15% OFF",
      minOrder: "₹5000",
      expiry: "2025-09-10",
    },
    {
      id: 3,
      code: "FESTIVE30",
      discount: "30% OFF",
      minOrder: "₹10000",
      expiry: "2025-11-20",
    },
  ]);

  const defaultAddress = addresses.find((a) => a.isDefault) || addresses[0];
  const [selected, setSelected] = useState(defaultAddress?.id || null);
  const [showForm, setShowForm] = useState(false);
  const [newAddr, setNewAddr] = useState({
    label: "",
    name: "",
    mobile: "",
    address: "",
    landmark: "",
    state: "",
    pincode: "",
  });
  const [checkPin, setCheckPin] = useState("");
  const [manualPin, setManualPin] = useState(null);
  const [distance, setDistance] = useState(null);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");

  const handleAddAddress = () => {
    if (!newAddr.label || !newAddr.pincode)
      return alert("Please fill label and pincode");
    const id = addresses.length + 1;
    setAddresses([...addresses, { id, ...newAddr, isDefault: false }]);
    setSelected(id);
    setNewAddr({
      label: "",
      name: "",
      mobile: "",
      address: "",
      landmark: "",
      state: "",
      pincode: "",
    });
    setShowForm(false);
  };

  const selectedAddress = addresses.find((a) => a.id === selected);

  const totalPrice = useMemo(() => {
    const total = cartItems.reduce((sum, item) => {
      const price = item.original_price ?? 0;
      const qty = item.qty || 1;
      return sum + price * qty;
    }, 0);
    console.log('Cart Items:', cartItems);
    console.log('Total Price:', total);
    return total;
  }, [cartItems]);

  const totalDiscount = useMemo(() => {
    const productDiscounts = cartItems.reduce((sum, item) => {
      const originalPrice = item.original_price ?? 0;
      const discountPercent = item.discountPercent ?? 0;
      const qty = item.qty || 1;
      const discount = (originalPrice * discountPercent) / 100;
      return sum + discount * qty;
    }, 0);
    let couponDiscount = 0;
    if (selectedCoupon) {
      const percentMatch = selectedCoupon.discount.match(/(\d+)%/);
      const discountPercent = percentMatch ? parseFloat(percentMatch[1]) : 0;
      couponDiscount = (discountPercent / 100) * totalPrice;
      console.log('Coupon Details:', {
        code: selectedCoupon.code,
        discount: selectedCoupon.discount,
        discountPercent,
        totalPrice,
        couponDiscount
      });
    }
    return Math.round(productDiscounts + couponDiscount);
  }, [cartItems, selectedCoupon, totalPrice]);

  const deliveryCharge = useMemo(() => {
    return getDeliveryPrice(distance);
  }, [distance]);

  const tax = Math.round(
    ((totalPrice - totalDiscount + deliveryCharge) * TAX_PERCENT) / 100
  );
  const totalPayable = Math.max(0, totalPrice - totalDiscount + deliveryCharge + tax);

  const handleCouponChange = (e) => {
    const couponId = e.target.value;
    if (!couponId) {
      setSelectedCoupon(null);
      setCouponError("");
      return;
    }

    const coupon = coupons.find((c) => c.id === Number(couponId));
    const minOrderValue = parseFloat(coupon.minOrder.replace("₹", "").replace(",", ""));
    const expiryDate = new Date(coupon.expiry);
    const today = new Date();

    if (today > expiryDate) {
      setCouponError(`Coupon ${coupon.code} has expired on ${coupon.expiry}`);
      setSelectedCoupon(null);
      return;
    }

    if (totalPrice < minOrderValue) {
      setCouponError(
        `This coupon is only applicable for a minimum order value of ${coupon.minOrder}`
      );
      setSelectedCoupon(null);
      return;
    }

    setSelectedCoupon(coupon);
    setCouponError("");
  };

  useEffect(() => {
    if (step === 3 && !window.Razorpay) {
      const s = document.createElement("script");
      s.src = "https://checkout.razorpay.com/v1/checkout.js";
      s.async = true;
      s.onload = () => console.log("Razorpay script loaded");
      s.onerror = () => console.error("Failed to load Razorpay script");
      document.body.appendChild(s);
    }
  }, [step]);

  const handlePlaceOrderCOD = () => {
    if (!selectedAddress && !manualPin) {
      alert("Please select an address or enter a pincode");
      return;
    }
    const order = buildOrder("COD", { razorpay_payment_id: "COD" });
    setCurrentOrder(order);
    clearCart();
    localStorage.removeItem("petcart_cart_v1");
    localStorage.setItem("petcart_last_order_v1", JSON.stringify(order));
    setStep(4, () => console.log("Set step to 4 for COD"));
  };

  function buildOrder(paymentMethod, paymentResult = {}) {
    const addr = selectedAddress || (manualPin ? { pincode: manualPin } : null);
    const id = generateOrderId();
    const date = new Date().toISOString();
    const items = cartItems.map((it) => ({
      id: it.id,
      name: it.short_name || it.name || "",
      qty: it.qty || 1,
      pricePerUnit: Math.round(it.original_price * (1 - (it.discountPercent ?? 0) / 100)),
      total: Math.round(
        (it.original_price * (1 - (it.discountPercent ?? 0) / 100)) * (it.qty || 1)
      ),
      image: (it.images && it.images[0]) || "/images/no-image.png",
    }));
    const order = {
      id,
      date,
      items,
      totalPrice,
      deliveryCharge,
      totalDiscount,
      tax,
      totalPayable,
      address: addr,
      payment: {
        method: paymentMethod,
        status: paymentMethod === "COD" ? "PENDING" : "SUCCESS",
        ...paymentResult,
      },
      coupon: selectedCoupon ? { code: selectedCoupon.code, discount: selectedCoupon.discount } : null,
    };
    console.log("Built order:", order);
    return order;
  }

  const handleRazorpayPayment = () => {
    if (!selectedAddress && !manualPin) {
      alert("Please select an address or enter a pincode");
      return;
    }
    if (!window.Razorpay) {
      setPaymentError("Payment service unavailable. Please try COD.");
      console.error("Razorpay not loaded");
      return;
    }
    setPaymentLoading(true);
    setPaymentError("");
    const options = {
      key: "rzp_test_YourTestKeyHere",
      amount: totalPayable * 100,
      currency: "INR",
      name: "PetCart.Shop",
      description: `Order payment: ${formatINR(totalPayable)}`,
      handler: function (response) {
        console.log("Razorpay payment success:", response);
        const order = buildOrder("ONLINE", response);
        setCurrentOrder(order);
        clearCart();
        localStorage.removeItem("petcart_cart_v1");
        localStorage.setItem("petcart_last_order_v1", JSON.stringify(order));
        setPaymentLoading(false);
        setStep(4, () => console.log("Set step to 4 for Razorpay"));
      },
      prefill: {
        name: selectedAddress?.name || "",
        email: JSON.parse(localStorage.getItem("user") || "null")?.email || "",
        contact: selectedAddress?.mobile || "",
      },
      theme: { color: "#F97316" },
    };

    try {
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response) {
        console.error("Razorpay payment failed:", response);
        setPaymentError("Payment failed. Please try again.");
        setPaymentLoading(false);
      });
      rzp.open();
    } catch (err) {
      console.error("Razorpay error:", err);
      setPaymentError("Unable to start payment. Try again.");
      setPaymentLoading(false);
    }
  };

  function StepProgress() {
    const steps = [
      { id: 1, title: "Items & Address" },
      { id: 2, title: "Review & Coupons" },
      { id: 3, title: "Payment" },
      { id: 4, title: "Order Summary" },
    ];
    return (
      <div className="w-full bg-white/50 rounded-lg p-2 sm:p-3 mb-4 sm:mb-6 shadow-sm">
        <div className="flex flex-row gap-2 sm:gap-4 items-center">
          {steps.map((s) => {
            const active = s.id === step;
            const done = s.id < step;
            return (
              <div key={s.id} className="flex-1">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-base ${
                      done
                        ? "bg-green-500 text-white"
                        : active
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {done ? "✓" : s.id}
                  </div>
                  <div className={`text-xs sm:text-sm ${active ? "font-semibold" : "text-gray-600"}`}>
                    {s.title}
                  </div>
                </div>
                {s.id !== 4 && (
                  <div
                    className={`h-1 mt-1 sm:mt-2 ${
                      s.id < step ? "bg-green-200" : "bg-gray-200"
                    } rounded`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Only show empty cart message if not in step 4
  if (step !== 4 && (!cartItems || cartItems.length === 0)) {
    return (
      <div className="min-h-screen p-4 sm:p-6 bg-gray-50">
        <div className="max-w-full sm:max-w-5xl mx-auto">
          <div className="py-4 sm:py-6">
            <h1 className="text-xl sm:text-2xl font-semibold">Checkout</h1>
            <p className="text-xs sm:text-sm text-gray-600">
              Your cart is empty — add items to checkout.
            </p>
            <div className="mt-3 sm:mt-4">
              <button
                className="px-4 py-2 bg-orange-600 text-white rounded text-sm sm:text-base min-w-[100px]"
                onClick={() => navigate("/")}
              >
                Back to shop
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <main className="max-w-full sm:max-w-6xl mx-auto p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Checkout</h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
          Complete your order in a few easy steps.
        </p>

        <StepProgress />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* LEFT SIDE (steps 1–3) */}
          <div className="md:col-span-2 space-y-3 sm:space-y-4">
            {/* Step 1: Items & Address */}
            {step === 1 && (
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Selected Items</h3>

                <div className="space-y-2 sm:space-y-3">
                  {cartItems.map((it) => (
                    <div
                      key={it.id}
                      className="flex items-center gap-2 sm:gap-3 border rounded p-2 sm:p-3"
                    >
                      <img
                        src={it.images?.[0] || "/images/no-image.png"}
                        alt={it.name}
                        className="w-12 h-12 sm:w-20 sm:h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-sm sm:text-base">
                          {it.short_name || it.name}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500">
                          Price: {formatINR(it.original_price * (1 - (it.discountPercent ?? 0) / 100))}
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2">
                          <button
                            onClick={() => decreaseQty(it.id)}
                            className="px-2 py-1 border rounded text-sm min-w-[32px] sm:min-w-[40px]"
                          >
                            -
                          </button>
                          <div className="px-2 sm:px-3 text-sm">{it.qty}</div>
                          <button
                            onClick={() => increaseQty(it.id)}
                            className="px-2 py-1 border rounded text-sm min-w-[32px] sm:min-w-[40px]"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(it.id)}
                            className="ml-2 sm:ml-4 text-red-500 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="text-right font-semibold text-sm sm:text-base">
                        {formatINR(
                          (it.original_price * (1 - (it.discountPercent ?? 0) / 100)) * (it.qty || 1)
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Address Selector */}
                <div className="mt-4 sm:mt-6 border-t pt-3 sm:pt-4">
                  <h4 className="text-sm font-semibold mb-2">Deliver to</h4>

                  <select
                    value={selected || ""}
                    onChange={(e) => {
                      setSelected(Number(e.target.value));
                      setManualPin(null);
                    }}
                    className="w-full border rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-sm"
                  >
                    <option value="" disabled>
                      Select an address
                    </option>
                    {addresses.map((addr) => (
                      <option key={addr.id} value={addr.id}>
                        {addr.label} – {addr.pincode}
                      </option>
                    ))}
                  </select>

                  {selectedAddress && !manualPin && (
                    <div className="mt-2 sm:mt-3 text-sm text-gray-700 space-y-1">
                      <p>
                        <strong>Address:</strong> {selectedAddress.label}
                      </p>
                      <p>{selectedAddress.name}</p>
                      <p>{selectedAddress.address}</p>
                      {selectedAddress.landmark && <p>{selectedAddress.landmark}</p>}
                      <p>
                        {selectedAddress.state} – {selectedAddress.pincode}
                      </p>
                      <p>
                        {selectedAddress.mobile} <span className="ml-1">📞</span>
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => setShowForm(!showForm)}
                    className="flex items-center gap-2 text-sm text-blue-600 mt-2 sm:mt-3 hover:underline"
                  >
                    <Plus size={16} /> Add New Address
                  </button>

                  {showForm && (
                    <div className="mt-2 sm:mt-3 space-y-2 border-t pt-2 sm:pt-3">
                      <input
                        type="text"
                        placeholder="Label (Home / Office)"
                        value={newAddr.label}
                        onChange={(e) => setNewAddr({ ...newAddr, label: e.target.value })}
                        className="w-full border rounded px-2 py-1.5 text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={newAddr.name}
                        onChange={(e) => setNewAddr({ ...newAddr, name: e.target.value })}
                        className="w-full border rounded px-2 py-1.5 text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Mobile"
                        value={newAddr.mobile}
                        onChange={(e) => setNewAddr({ ...newAddr, mobile: e.target.value })}
                        className="w-full border rounded px-2 py-1.5 text-sm"
                      />
                      <textarea
                        placeholder="Address"
                        value={newAddr.address}
                        onChange={(e) => setNewAddr({ ...newAddr, address: e.target.value })}
                        className="w-full border rounded px-2 py-1.5 text-sm"
                        rows={2}
                      />
                      <input
                        type="text"
                        placeholder="Landmark"
                        value={newAddr.landmark}
                        onChange={(e) => setNewAddr({ ...newAddr, landmark: e.target.value })}
                        className="w-full border rounded px-2 py-1.5 text-sm"
                      />
                      <input
                        type="text"
                        placeholder="State"
                        value={newAddr.state}
                        onChange={(e) => setNewAddr({ ...newAddr, state: e.target.value })}
                        className="w-full border rounded px-2 py-1.5 text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Pincode"
                        value={newAddr.pincode}
                        onChange={(e) =>
                          setNewAddr({ ...newAddr, pincode: e.target.value })
                        }
                        className="w-full border rounded px-2 py-1.5 text-sm"
                      />
                      <button
                        onClick={handleAddAddress}
                        className="w-full bg-green-600 text-white py-1.5 rounded text-sm hover:bg-green-700 min-w-[100px]"
                      >
                        Save Address
                      </button>
                    </div>
                  )}

                  <div className="mt-3 sm:mt-4 border-t pt-2 sm:pt-3">
                    <h4 className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                      <MapPin size={14} /> Check delivery to your pincode
                    </h4>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={checkPin}
                        onChange={(e) => setCheckPin(e.target.value)}
                        placeholder="Enter Pincode"
                        className="flex-1 border rounded px-2 py-1.5 text-sm"
                      />
                      <button
                        onClick={() => {
                          if (!checkPin) return alert("Enter a pincode first");
                          setManualPin(checkPin);
                          setSelected(null);
                        }}
                        className="px-3 py-1.5 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 min-w-[100px]"
                      >
                        Check
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-4 sm:mt-6 gap-2">
                  <button
                    disabled
                    className="px-4 py-2 bg-gray-200 rounded text-sm min-w-[100px]"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    disabled={!selectedAddress && !manualPin}
                    className={`px-4 py-2 rounded text-sm min-w-[100px] ${
                      selectedAddress || manualPin
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
                  >
                    Proceed to Review
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Review & Coupons */}
            {step === 2 && (
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Review Order & Apply Coupons</h3>
                <div className="space-y-2 sm:space-y-3 mb-3">
                  {cartItems.map((it) => (
                    <div
                      key={it.id}
                      className="flex items-center gap-2 sm:gap-3 border rounded p-2 sm:p-3"
                    >
                      <img
                        src={it.images?.[0] || "/images/no-image.png"}
                        alt={it.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-sm sm:text-base">
                          {it.short_name || it.name}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500">
                          {it.qty} × {formatINR(it.original_price * (1 - (it.discountPercent ?? 0) / 100))}
                        </div>
                      </div>
                      <div className="font-semibold text-sm sm:text-base">
                        {formatINR(
                          (it.original_price * (1 - (it.discountPercent ?? 0) / 100)) * (it.qty || 1)
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <div className="text-sm mb-1">Apply Coupon</div>
                    <select
                      value={selectedCoupon ? selectedCoupon.id : ""}
                      onChange={handleCouponChange}
                      className="w-full border rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-sm"
                    >
                      <option value="">Select a coupon</option>
                      {coupons
                        .filter((c) => new Date(c.expiry) >= new Date())
                        .map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.code} - {c.discount} (Min Order: {c.minOrder}, Expires: {c.expiry})
                          </option>
                        ))}
                    </select>
                    {couponError && (
                      <div className="mt-2 text-sm text-red-600">{couponError}</div>
                    )}
                    {selectedCoupon && (
                      <div className="mt-2 text-sm text-green-600">
                        Applied: {selectedCoupon.code} — -
                        {formatINR(
                          (() => {
                            const percentMatch = selectedCoupon.discount.match(/(\d+)%/);
                            const discountPercent = percentMatch ? parseFloat(percentMatch[1]) : 0;
                            return (discountPercent / 100) * totalPrice;
                          })()
                        )}
                        <button
                          onClick={() => {
                            setSelectedCoupon(null);
                            setCouponError("");
                          }}
                          className="ml-2 text-red-500 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="border p-2 sm:p-3 rounded">
                    <div className="flex justify-between text-sm">
                      <div>Total Price of All Selected Products</div>
                      <div>{formatINR(totalPrice)}</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>Delivery Charges</div>
                      <div>{formatINR(deliveryCharge)}</div>
                    </div>
                    {selectedCoupon && (
                      <div className="flex justify-between text-sm">
                        <div>Coupon Discount ({selectedCoupon.code})</div>
                        <div>
                          -{formatINR(
                            (() => {
                              const percentMatch = selectedCoupon.discount.match(/(\d+)%/);
                              const discountPercent = percentMatch ? parseFloat(percentMatch[1]) : 0;
                              return (discountPercent / 100) * totalPrice;
                            })()
                          )}
                        </div>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <div>Product Discounts</div>
                      <div>
                        -{formatINR(
                          cartItems.reduce((sum, item) => {
                            const originalPrice = item.original_price ?? 0;
                            const discountPercent = item.discountPercent ?? 0;
                            const qty = item.qty || 1;
                            const discount = (originalPrice * discountPercent) / 100;
                            return sum + discount * qty;
                          }, 0)
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>Tax</div>
                      <div>{formatINR(tax)}</div>
                    </div>
                    <div className="flex justify-between font-bold mt-2 text-sm sm:text-base">
                      <div>Total Payable</div>
                      <div>{formatINR(totalPayable)}</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-4 sm:mt-6 gap-2">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2 bg-gray-200 rounded text-sm min-w-[100px]"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 min-w-[100px]"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Payment</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="border p-2 sm:p-3 rounded">
                    <div className="text-sm mb-2">Select payment method</div>
                    <PaymentOptions
                      onPayNow={handleRazorpayPayment}
                      onPayCOD={handlePlaceOrderCOD}
                      loading={paymentLoading}
                    />
                    {paymentError && (
                      <div className="text-sm text-red-600 mt-2">
                        {paymentError}
                      </div>
                    )}
                  </div>

                  <div className="border p-2 sm:p-3 rounded">
                    <div className="text-sm">Order summary</div>
                    <div className="mt-2">
                      <div className="flex justify-between text-sm">
                        <div>Total Price of All Selected Products</div>
                        <div>{formatINR(totalPrice)}</div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <div>Delivery Charges</div>
                        <div>{formatINR(deliveryCharge)}</div>
                      </div>
                      {selectedCoupon && (
                        <div className="flex justify-between text-sm">
                          <div>Coupon Discount ({selectedCoupon.code})</div>
                          <div>
                            -{formatINR(
                              (() => {
                                const percentMatch = selectedCoupon.discount.match(/(\d+)%/);
                                const discountPercent = percentMatch ? parseFloat(percentMatch[1]) : 0;
                                return (discountPercent / 100) * totalPrice;
                              })()
                            )}
                          </div>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <div>Product Discounts</div>
                        <div>
                          -{formatINR(
                            cartItems.reduce((sum, item) => {
                              const originalPrice = item.original_price ?? 0;
                              const discountPercent = item.discountPercent ?? 0;
                              const qty = item.qty || 1;
                              const discount = (originalPrice * discountPercent) / 100;
                              return sum + discount * qty;
                            }, 0)
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <div>Tax</div>
                        <div>{formatINR(tax)}</div>
                      </div>
                      <div className="flex justify-between font-bold mt-2 text-sm sm:text-base">
                        <div>Total Payable</div>
                        <div>{formatINR(totalPayable)}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-4 sm:mt-6 gap-2">
                  <button
                    onClick={() => setStep(2)}
                    className="px-4 py-2 bg-gray-200 rounded text-sm min-w-[100px]"
                  >
                    Back
                  </button>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        const order = buildOrder("DEV_SUCCESS", { razorpay_payment_id: "DEV_SUCCESS" });
                        setCurrentOrder(order);
                        clearCart();
                        localStorage.removeItem("petcart_cart_v1");
                        localStorage.setItem("petcart_last_order_v1", JSON.stringify(order));
                        setStep(4, () => console.log("Set step to 4 for Simulate Success"));
                      }}
                      className="px-4 py-2 bg-green-600 text-white rounded text-sm min-w-[100px]"
                    >
                      Simulate Success (dev)
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="px-4 py-2 bg-red-400 text-white rounded text-sm min-w-[100px]"
                    >
                      Simulate Failure (dev)
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDE (Order Summary + Delivery Estimate) */}
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-gray-900">Order Summary</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Total Price of All Selected Products</span>
                  <span>{formatINR(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span>{formatINR(deliveryCharge)}</span>
                </div>
                {selectedCoupon && (
                  <div className="flex justify-between">
                    <span>Coupon Discount ({selectedCoupon.code})</span>
                    <span>
                      -{formatINR(
                        (() => {
                          const percentMatch = selectedCoupon.discount.match(/(\d+)%/);
                          const discountPercent = percentMatch ? parseFloat(percentMatch[1]) : 0;
                          return (discountPercent / 100) * totalPrice;
                        })()
                      )}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Product Discounts</span>
                  <span>
                    -{formatINR(
                      cartItems.reduce((sum, item) => {
                        const originalPrice = item.original_price ?? 0;
                        const discountPercent = item.discountPercent ?? 0;
                        const qty = item.qty || 1;
                        const discount = (originalPrice * discountPercent) / 100;
                        return sum + discount * qty;
                      }, 0)
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>{formatINR(tax)}</span>
                </div>
                <div className="flex justify-between font-bold text-base sm:text-lg mt-2 text-gray-900">
                  <span>Total Payable</span>
                  <span>{formatINR(totalPayable)}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-base sm:text-lg mb-2">Delivery Estimate</h4>
              <DeliveryEstimate
                pincode={manualPin || (selectedAddress ? selectedAddress.pincode : null)}
                setDistance={setDistance}
                distance={distance}
              />
            </div>
          </div>
        </div>

        {/* Step 4: Order Summary (Thank You Screen) */}
        {step === 4 && currentOrder && (
          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm mt-4 sm:mt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Thank you! Your order is placed.
                </h3>
                <p className="text-sm text-gray-600">
                  Order ID: <strong>{currentOrder.id}</strong>
                </p>
                <p className="text-sm text-gray-600">
                  Placed on: {new Date(currentOrder.date).toLocaleString()}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => navigate("/")}
                  className="px-4 py-2 bg-orange-600 text-white rounded text-sm min-w-[100px] hover:bg-orange-700"
                >
                  Home
                </button>
                <button
                  onClick={() => navigate("/shop")}
                  className="px-4 py-2 bg-blue-600 text-white rounded text-sm min-w-[100px] hover:bg-blue-700"
                >
                  Shop
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div className="md:col-span-2">
                <h4 className="font-semibold text-base sm:text-lg mb-2">Delivery Details</h4>
                <div className="border p-2 sm:p-3 rounded">
                  {currentOrder.address ? (
                    <>
                      {currentOrder.address.label && (
                        <div className="font-medium text-sm sm:text-base">
                          {currentOrder.address.label} — {currentOrder.address.name || "N/A"}
                        </div>
                      )}
                      {currentOrder.address.mobile && (
                        <div className="text-sm text-gray-600">
                          {currentOrder.address.mobile}
                        </div>
                      )}
                      {currentOrder.address.address && (
                        <div className="text-sm mt-1">
                          {currentOrder.address.address}
                          {currentOrder.address.landmark ? `, ${currentOrder.address.landmark}` : ""}
                          {currentOrder.address.state ? `, ${currentOrder.address.state}` : ""} –{" "}
                          {currentOrder.address.pincode}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-sm text-gray-600">
                      Delivery to pincode: {currentOrder.address?.pincode}
                    </div>
                  )}
                </div>

                <h4 className="font-semibold text-base sm:text-lg mt-3 sm:mt-4 mb-2">Ordered Items</h4>
                <div className="space-y-2">
                  {currentOrder.items.map((it) => (
                    <div
                      key={it.id}
                      className="flex items-center gap-2 sm:gap-3 border p-2 sm:p-3 rounded"
                    >
                      <img
                        src={it.image}
                        alt={it.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-sm sm:text-base">{it.name}</div>
                        <div className="text-sm text-gray-500">
                          Qty: {it.qty} × {formatINR(it.pricePerUnit)}
                        </div>
                      </div>
                      <div className="font-semibold text-sm sm:text-base">{formatINR(it.total)}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">Price Breakdown</h4>
                <div className="border p-2 sm:p-3 rounded">
                  <div className="flex justify-between text-sm">
                    <div>Total Price of All Selected Products</div>
                    <div>{formatINR(currentOrder.totalPrice)}</div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>Delivery Charges</div>
                    <div>{formatINR(currentOrder.deliveryCharge)}</div>
                  </div>
                  {currentOrder.coupon && (
                    <div className="flex justify-between text-sm">
                      <div>Coupon Discount ({currentOrder.coupon.code})</div>
                      <div>
                        -{formatINR(
                          (() => {
                            const percentMatch = currentOrder.coupon.discount.match(/(\d+)%/);
                            const discountPercent = percentMatch ? parseFloat(percentMatch[1]) : 0;
                            return (discountPercent / 100) * currentOrder.totalPrice;
                          })()
                        )}
                      </div>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <div>Product Discounts</div>
                    <div>
                      -{formatINR(
                        currentOrder.items.reduce((sum, item) => {
                          const originalPrice = item.pricePerUnit / (1 - (item.discountPercent ?? 0) / 100);
                          const discount = (originalPrice * (item.discountPercent ?? 0) / 100) * item.qty;
                          return sum + discount;
                        }, 0)
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>Tax</div>
                    <div>{formatINR(currentOrder.tax)}</div>
                  </div>
                  <div className="flex justify-between font-bold mt-2 text-sm sm:text-base">
                    <div>Total Payable</div>
                    <div>{formatINR(currentOrder.totalPayable)}</div>
                  </div>

                  <div className="mt-2 sm:mt-3">
                    <div className="text-sm text-gray-600">
                      Payment Method: {currentOrder.payment.method}
                    </div>
                    <div className="text-sm text-gray-600">
                      Status: {currentOrder.payment.status}
                    </div>
                    {currentOrder.payment.razorpay_payment_id && (
                      <div className="text-sm text-gray-600">
                        Txn ID: {currentOrder.payment.razorpay_payment_id}
                      </div>
                    )}
                  </div>

                  <div className="mt-3 sm:mt-4">
                    <button
                      onClick={() => navigate("/account/orders")}
                      className="w-full px-4 py-2 bg-white border rounded text-sm"
                    >
                      Manage Order / Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

/* PaymentOptions Component */
function PaymentOptions({ onPayNow, onPayCOD, loading }) {
  const [method, setMethod] = useState("card");

  return (
    <div>
      <div className="space-y-2">
        <label className="flex items-center gap-2 p-2 border rounded text-sm">
          <input
            type="radio"
            name="pay"
            checked={method === "card"}
            onChange={() => setMethod("card")}
          />
          <div className="ml-2">Credit / Debit Card</div>
        </label>
        <label className="flex items-center gap-2 p-2 border rounded text-sm">
          <input
            type="radio"
            name="pay"
            checked={method === "upi"}
            onChange={() => setMethod("upi")}
          />
          <div className="ml-2">UPI (Google Pay / PhonePe / Paytm)</div>
        </label>
        <label className="flex items-center gap-2 p-2 border rounded text-sm">
          <input
            type="radio"
            name="pay"
            checked={method === "netbanking"}
            onChange={() => setMethod("netbanking")}
          />
          <div className="ml-2">Netbanking</div>
        </label>
        <label className="flex items-center gap-2 p-2 border rounded text-sm">
          <input
            type="radio"
            name="pay"
            checked={method === "cod"}
            onChange={() => setMethod("cod")}
          />
          <div className="ml-2">Cash on Delivery (COD)</div>
        </label>
      </div>

      <div className="mt-3 flex gap-2">
        {method === "cod" ? (
          <button
            onClick={onPayCOD}
            disabled={loading}
            className="px-4 py-2 bg-orange-600 text-white rounded text-sm min-w-[100px]"
          >
            Place Order (COD)
          </button>
        ) : (
          <button
            onClick={onPayNow}
            disabled={loading}
            className="px-4 py-2 bg-green-600 text-white rounded text-sm min-w-[100px]"
          >
            {loading ? "Processing..." : "Proceed to Pay"}
          </button>
        )}
      </div>
    </div>
  );
}