'use client';

import { useEffect, useState } from 'react';

function getTxNumber() {
  const now = Date.now();
  return 6432 + Math.floor(now / 60000) % 1000;
}

function getAiHours() {
  const base = 38.4;
  const hoursSinceEpoch = Date.now() / 3600000;
  return (base + (hoursSinceEpoch % 10) * 0.1).toFixed(1);
}

export function ReceiptHeader() {
  const [tx, setTx] = useState(6432);
  const [aiHours, setAiHours] = useState('38.4');

  useEffect(() => {
    setTx(getTxNumber());
    setAiHours(getAiHours());
  }, []);

  return (
    <section className="bg-ff-bg">
      <div className="container-content py-16 md:py-20">
        <div className="max-w-lg mx-auto font-receipt text-[13px] md:text-[14px] tracking-[0.02em] text-ff-fade-50 text-center space-y-1">
          <div className="text-ff-paper tracking-[0.15em]">*** FIFTY &amp; FIVE &middot; MAY MMXXVI ***</div>
          <div>TX# {tx.toLocaleString()}{'       '}OPERATOR: LV</div>
          <hr className="receipt-divider my-4" />
          <div className="text-left max-w-xs mx-auto space-y-0.5">
            <ReceiptLine label="BRANDS MANAGED" value="215+" />
            <ReceiptLine label="CONTINENTS" value="5" />
            <ReceiptLine label="COUNTRIES" value="40+" />
            <ReceiptLine label="YEARS LIVE" value="18.0" />
            <ReceiptLine label="PLATFORMS OUTLIVED" value="16" />
            <ReceiptLine label="HOURS SAVED BY AI/WK" value={aiHours} />
          </div>
          <hr className="receipt-divider my-4" />
          <div className="text-ff-paper tracking-[0.15em]">*** OPEN FOR THREE ***</div>
        </div>
      </div>
    </section>
  );
}

function ReceiptLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-2">
      <span>{label}</span>
      <span className="flex-1 border-b border-dotted border-ff-fade-30 mx-1 mb-1" />
      <span className="text-ff-data">{value}</span>
    </div>
  );
}
