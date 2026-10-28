import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FaUserSlash,
  FaHeadset,
  FaEnvelope,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const Deactive = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [soundOn, setSoundOn] = useState(true);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);
  const playedRef = useRef(false);

  // 🚨 Siren sound using Web Audio API
  const playSiren = () => {
    if (!soundOn) return;
    try {
      const ctx =
        audioCtxRef.current ||
        new (window.AudioContext || window.webkitAudioContext)();
      audioCtxRef.current = ctx;

      if (ctx.state === "suspended") ctx.resume();

      // Two-tone siren: high → low → high → low (like an ambulance)
      const now = ctx.currentTime;
      const tone = (freq, start, dur, vol = 0.25) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth"; // harsher than sine, sounds more like an alarm
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(vol, start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + dur);
      };

      // Siren pattern (1 second cycle)
      tone(1000, now + 0.0, 0.25); // high
      tone(600, now + 0.3, 0.25); // low
      tone(1000, now + 0.6, 0.25); // high
      tone(600, now + 0.9, 0.25); // low
    } catch (e) {
      console.warn("Audio error:", e);
    }
  };

  // Start siren on mount + repeat every 2 seconds
  useEffect(() => {
    if (!soundOn) return;

    const startSiren = () => {
      if (playedRef.current) return;
      playedRef.current = true;
      playSiren();
    };

    // Try immediately (works if user already interacted with site)
    startSiren();

    // Repeat every 2 seconds (max 5 times = 10 seconds total)
    let count = 0;
    intervalRef.current = setInterval(() => {
      count++;
      if (count >= 5) {
        clearInterval(intervalRef.current);
        return;
      }
      playSiren();
    }, 2000);

    // Fallback: play on first interaction if autoplay was blocked
    const onInteract = () => {
      if (!playedRef.current) {
        playedRef.current = true;
        playSiren();
      }
    };
    window.addEventListener("click", onInteract, { once: true });
    window.addEventListener("keydown", onInteract, { once: true });
    window.addEventListener("touchstart", onInteract, { once: true });

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("click", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("touchstart", onInteract);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soundOn]);

  // Stop siren when sound is muted
  useEffect(() => {
    if (!soundOn && intervalRef.current) {
      clearInterval(intervalRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      playedRef.current = true; // prevent re-trigger
    }
  }, [soundOn]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-rose-50 to-orange-50 px-4 py-8">
      {/* 🔇 Mute/Unmute toggle (fixed top-right) */}
      <button
        onClick={() => setSoundOn((s) => !s)}
        aria-label={soundOn ? "Mute siren" : "Unmute siren"}
        className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-red-600 transition-all hover:scale-110"
      >
        {soundOn ? (
          <FaVolumeUp size={20} />
        ) : (
          <FaVolumeMute size={20} className="text-red-500" />
        )}
      </button>

      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* ===== Header ===== */}
          <div className="bg-gradient-to-r from-red-500 to-rose-600 px-8 py-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-24 h-24 rounded-full bg-white" />
              <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-white" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white" />
            </div>
            <div className="relative">
              <div className="mx-auto w-24 h-24 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-4 ring-4 ring-white/30 animate-pulse">
                <FaUserSlash className="text-white text-5xl" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Your Account Has Been Deactivated
              </h1>
              <p className="text-white/90 text-sm">
                Dear seller, your access to the panel has been temporarily
                restricted
              </p>
            </div>
          </div>

          {/* ===== Body ===== */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* User info */}
            {userInfo && (
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white text-xl font-bold shrink-0">
                    {userInfo.name?.charAt(0)?.toUpperCase() || "?"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-800 text-lg truncate">
                      {userInfo.name || "User"}
                    </p>
                    <p className="text-gray-500 text-sm truncate">
                      {userInfo.email || ""}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold shrink-0">
                    Deactivated
                  </span>
                </div>
              </div>
            )}

            {/* Warning message */}
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-5">
              <h2 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                ⚠️ Why was your account deactivated?
              </h2>
              <p className="text-amber-800 text-sm leading-relaxed">
                Your seller account has been deactivated due to a policy
                violation, unverified documents, or your own request. To learn
                more and request reactivation, please contact our support team.
              </p>
            </div>

            {/* Contact options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="mailto:support@example.com"
                className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition border border-blue-100 group"
              >
                <div className="w-11 h-11 rounded-lg bg-blue-500 text-white flex items-center justify-center group-hover:scale-110 transition shrink-0">
                  <FaEnvelope />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-blue-900 text-sm">
                    Email Support
                  </p>
                  <p className="text-blue-700 text-xs truncate">
                    support@example.com
                  </p>
                </div>
              </a>

              <button
                onClick={() => navigate("/seller/dashboard/chat-admin")}
                className="flex items-center gap-3 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition border border-green-100 group text-left"
              >
                <div className="w-11 h-11 rounded-lg bg-green-500 text-white flex items-center justify-center group-hover:scale-110 transition shrink-0">
                  <MdSupportAgent />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-green-900 text-sm">Live Chat</p>
                  <p className="text-green-700 text-xs">Fast response</p>
                </div>
              </button>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => navigate("/seller/dashboard/orders")}
                className="flex-1 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition flex items-center justify-center gap-2"
              >
                <FaHeadset />
                View My Orders
              </button>
              <button
                onClick={() => navigate("/login")}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold hover:shadow-lg transition"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-6">
          © {new Date().getFullYear()} Seller Platform — All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Deactive;