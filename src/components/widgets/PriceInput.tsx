"use client";
import Image from "next/image";

type PriceInputProps = {
  ticker: string;
  balance: number;
  value?: number;
  icon?: string;
  onChange: (value: number) => void;
};

export default function PriceInput({
  balance,
  ticker,
  value,
  icon,
  onChange,
}: PriceInputProps) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center justify-end text-xs uppercase">
        {balance.toFixed(4)} {ticker}
      </div>
      <div className="flex items-center border border-stone-500/50 rounded px-1 space-x-2">
        <input
          value={value}
          type="number"
          placeholder="0.0"
          className="flex-1 bg-transparent p-2 outline-none placeholder-stone/60"
          onChange={(event) => {
            const value = event.currentTarget.value;
            onChange(Number(value));
          }}
        />
        <div className="flex space-x-2 items-center">
          {icon && (
            <Image
              src={icon}
              alt={ticker}
              width={24}
              height={24}
              className="rounded-full"
            />
          )}
          <button
            type="button"
            className="rounded-md bg-green/20 px-2 py-1 text-sm text-green"
            onClick={() => onChange(balance)}
          >
            Max
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        {Array.from({ length: 4 }).map((_, index) => {
          const per = 25 * (index + 1);
          return (
            <button
              type="button"
              key={index}
              className="rounded bg-green-200 px-2 py-1 text-xs text-black hover:bg-white/80 after-font-mono after-content-['%']"
              onClick={() => onChange(balance * (per / 100))}
            >
              {per}
            </button>
          );
        })}
      </div>
    </div>
  );
}
