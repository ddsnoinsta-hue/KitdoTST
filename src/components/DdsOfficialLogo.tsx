import React from 'react';
import ddsExactLogoImg from '../assets/images/dds_exact_logo_1786829348688.jpg';

interface DdsLogoProps {
  className?: string;
  size?: number | string;
  rounded?: boolean;
}

export const DdsOfficialLogo: React.FC<DdsLogoProps> = ({ 
  className = "w-11 h-11", 
  size,
  rounded = true
}) => {
  return (
    <img
      src={ddsExactLogoImg}
      alt="Logo Oficial DDS NO INSTA"
      className={`object-contain bg-white shrink-0 select-none ${rounded ? 'rounded-full' : ''} ${className}`}
      style={size ? { width: size, height: size } : undefined}
      referrerPolicy="no-referrer"
    />
  );
};
export default DdsOfficialLogo;
