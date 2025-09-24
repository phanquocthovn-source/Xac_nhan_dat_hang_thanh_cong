import React from 'react';

const ArrowLeftIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg
        className={className}
        style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
    </svg>
);

export default ArrowLeftIcon;