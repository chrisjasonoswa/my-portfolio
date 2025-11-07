"use client";
import { useState } from "react";


export default function VerifiedBadgeIcon(
  { size = 20, color = "#1DA1F2" } :  { size?: number | string, color?: string }
) {
  const [showTooltip, setShowTooltip] = useState(false);

  const getIcon = ({customSize = size, customColor = color } : {customSize?: number | string, customColor?: string }) => {
    return(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={customSize}
        height={customColor}
        viewBox="0 0 56 56"
        fill={color}
        className="cursor-pointer"
      >
        <path d="M23.6641 52.3985C26.6172 55.375 29.3594 55.3516 32.3126 52.3985L35.9219 48.8125C36.2969 48.461 36.625 48.3203 37.1172 48.3203H42.1797C46.3749 48.3203 48.3204 46.3985 48.3204 42.1797V37.1172C48.3204 36.625 48.461 36.2969 48.8124 35.9219L52.3749 32.3125C55.3749 29.3594 55.3514 26.6172 52.3749 23.6641L48.8124 20.0547C48.461 19.7031 48.3204 19.3516 48.3204 18.8829V13.7969C48.3204 9.625 46.3985 7.6563 42.1797 7.6563H37.1172C36.625 7.6563 36.2969 7.5391 35.9219 7.1875L32.3126 3.6016C29.3594.625 26.6172.6485 23.6641 3.6016L20.0547 7.1875C19.7032 7.5391 19.3516 7.6563 18.8828 7.6563H13.7969C9.6016 7.6563 7.6563 9.5782 7.6563 13.7969V18.8829C7.6563 19.3516 7.5391 19.7031 7.1876 20.0547L3.6016 23.6641C.6251 26.6172.6485 29.3594 3.6016 32.3125L7.1876 35.9219C7.5391 36.2969 7.6563 36.625 7.6563 37.1172V42.1797C7.6563 46.375 9.6016 48.3203 13.7969 48.3203H18.8828C19.3516 48.3203 19.7032 48.461 20.0547 48.8125ZM24.0391 39.7891C23.3126 39.7891 22.8438 39.5547 22.4923 39.1563L14.6641 30.4609C14.336 30.086 14.1485 29.6172 14.1485 29.125C14.1485 28.0234 14.9923 27.2031 16.1876 27.2031C16.8204 27.2031 17.2891 27.4141 17.711 27.8594L23.9219 34.7266L35.9923 17.7344C36.461 17.0547 36.9297 16.7734 37.7501 16.7734C38.8985 16.7734 39.7188 17.6172 39.7188 18.7188C39.7188 19.1172 39.5547 19.586 39.2969 19.9609L25.6328 39.0625C25.2813 39.5078 24.7423 39.7891 24.0391 39.7891Z" />
      </svg>
    )
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* The Verified Icon */}
      {getIcon({})}

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-neutral-900 text-white text-sm rounded-xl shadow-lg p-4 z-50 border border-white/10">
          <div className="font-semibold mb-1">Verified account</div>
          <p className="text-gray-400 text-xs font-normal">
            This person is a verified software engineer because he is an official organization or a notable person.
          </p>
          <div className="flex gap-2 text-xs text-gray-300 mt-2 border-t border-white/10 pt-2">
            {getIcon({customSize: 14})}Verified since June 2023.
          </div>
        </div>
      )}
    </div>
  );
}
