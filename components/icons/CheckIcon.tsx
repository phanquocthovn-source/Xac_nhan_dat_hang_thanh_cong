import React from 'react';

const CheckIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7a1 1 0 011.42-1.42l2.18 2.18 5.3-5.3a1 1 0 111.42 1.42L10.7 16.29a1 1 0 01-1.41 0z"
            clipRule="evenodd"
        />
    </svg>
);

export default CheckIcon;
