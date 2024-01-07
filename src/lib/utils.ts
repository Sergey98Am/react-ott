import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const chunkIntoN = <T>(arr: T[], n: number): T[][] => {
  const size = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );
};

export const formatNumber = (num: number, precision: number = 2): string => {
  type MapEntry = { suffix: string; threshold: number };

  const map: MapEntry[] = [
    { suffix: "T", threshold: 1e12 },
    { suffix: "B", threshold: 1e9 },
    { suffix: "M", threshold: 1e6 },
    { suffix: "K", threshold: 1e3 },
    { suffix: "", threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    let formatted = (num / found.threshold).toFixed(precision);
    if (precision === 2 && formatted.endsWith("0")) {
      formatted = parseFloat(formatted).toString();
    }
    return formatted + found.suffix;
  }

  return num.toString();
};

export const formatDate = (dateTimeString: string): string => {
  const date = new Date(dateTimeString);

  const day = date.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
