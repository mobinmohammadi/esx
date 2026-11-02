import { useEffect, useRef, useState } from "react";

/* مدت زمان: 1 هفته */
const ONE_WEEK_MS =
  7 * 24 * 60 * 60 * 1000; // 604,800,000 میلی‌ثانیه

/* محاسبه اختلاف بین الان و زمان پایان */
function calc(target) {
  const diff = target - Date.now();
  const safe = Math.max(0, diff);
  return {
    days: Math.floor(safe / (1000 * 60 * 60 * 24)),
    hours: Math.floor((safe / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((safe / (1000 * 60)) % 60),
    seconds: Math.floor((safe / 1000) % 60),
    done: diff <= 0,
  };
}

export default function UnderDevelopment() {
  /* تاریخ پایان: یک هفته بعد از اولین باز شدن صفحه،
     در localStorage ذخیره می‌شود تا با رفرش صفر نشود */
  const [target] = useState(() => {
    const KEY = "shop_launch_target";
    const saved = localStorage.getItem(KEY);
    if (saved) {
      const n = Number(saved);
      if (Number.isFinite(n) && n > Date.now()) return n;
    }
    const n = Date.now() + ONE_WEEK_MS;
    localStorage.setItem(KEY, String(n));
    return n;
  });

  const [time, setTime] = useState(() => calc(target));
  const timerRef = useRef(null);

  useEffect(() => {
    // تایمر اولیه
    timerRef.current = setInterval(() => {
      setTime(calc(target));
    }, 1000);

    // اگر تب مخفی شد و برگشت، فوراً sync کن
    const onVis = () => {
      if (document.visibilityState === "visible") {
        setTime(calc(target));
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [target]);

  const units = [
    { label: "روز", value: time.days },
    { label: "ساعت", value: time.hours },
    { label: "دقیقه", value: time.minutes },
    { label: "ثانیه", value: time.seconds },
  ];

  return (
    <div className="relative font-bold min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white">
      {/* حباب‌های نورانی */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl animate-pulse [animation-delay:1s]" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl animate-pulse [animation-delay:2s]" />

      {/* الگوی نقطه‌ای */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-16 sm:px-8 md:py-24">
        {/* آیکون */}
        <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-500 to-indigo-500 shadow-lg shadow-indigo-500/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>

        {/* برچسب */}
        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
          <span
            className={`h-2 w-2 rounded-full ${
              time.done ? "bg-green-400" : "animate-ping bg-green-400"
            }`}
          />
          {time.done ? "آماده شد!" : "به‌زودی..."}
        </span>

        {/* عنوان */}
        <h1 className="mb-6 max-w-3xl text-center text-3xl font-extrabold leading-[1.4] sm:text-4xl md:text-6xl md:leading-tight">
          فروشگاه ما در حال{" "}
          <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
            آماده‌سازی
          </span>{" "}
          است
        </h1>

        {/* توضیحات */}
        <p className="mb-12 max-w-xl text-center text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
          {time.done
            ? "🎉 فروشگاه آماده است! به‌زودی صفحه اصلی را باز می‌کنیم."
            : "ما در حال آماده‌سازی یک تجربه خرید متفاوت برای شما هستیم."}
          {!time.done && (
            <>
              <br className="hidden sm:block" /> به‌زودی محصولات
              فوق‌العاده‌ای در انتظار شماست ✨
            </>
          )}
        </p>

        {/* شمارش معکوس */}
        <div className="mb-6 flex w-full max-w-lg flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
          {units.map((u) => (
            <div
              key={u.label}
              className="flex w-[70px] flex-col items-center rounded-2xl border border-white/15 bg-white/5 px-3 py-4 backdrop-blur-md sm:w-[88px] sm:py-5 md:w-[100px]"
            >
              <span className="text-2xl font-bold tabular-nums sm:text-3xl md:text-4xl">
                {String(u.value).padStart(2, "0")}
              </span>
              <span className="mt-2 text-[10px] uppercase tracking-wider text-white/60 sm:text-xs">
                {u.label}
              </span>
            </div>
          ))}
        </div>

        {/* تاریخ پایان */}
        <p className="mb-12 text-xs text-white/50">
          زمان پایان:{" "}
          {new Date(target).toLocaleString("fa-IR", {
            dateStyle: "full",
            timeStyle: "short",
          })}
        </p>

        {/* ایمیل */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-md flex-col gap-4 sm:flex-row sm:gap-3"
        >
          <input
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            className="w-full flex-1 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm text-white placeholder-white/50 outline-none backdrop-blur transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
          />
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-[1.03] active:scale-[0.98]"
          >
            اطلاع بده
          </button>
        </form>

        <p className="mt-10 text-xs text-white/40">
          © {new Date().getFullYear()} فروشگاه ما — تمامی حقوق محفوظ است.
        </p>
      </div>
    </div>
  );
}