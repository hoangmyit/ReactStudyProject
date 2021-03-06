import React, { FC } from 'react';
import { IconProps } from '../icon-props';

const AddressIcon: FC<IconProps> = (props: IconProps) => {
  const { size, color } = props;
  return (
    <svg
      id="Layer_1"
      version="1.1"
      width={size}
      height={size}
      viewBox="0 0 128 128"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle cx="64" cy="64" r="64" fill={color} />
      </g>
      <g>
        <g>
          <path fill="#FFFFFF" d="M64,28" />
        </g>
      </g>
      <g>
        <path fill="#FFFFFF" d="M64,38c-8.8,0-16,7.2-16,16s7.2,16,16,16s16-7.2,16-16S72.8,38,64,38z" />
        <path
          fill="#FFFFFF"
          d="M64,24c-16.6,0-30,13.4-30,30c0,15,24.6,43.8,29.3,49.1c0.4,0.5,1.1,0.5,1.5,0C69.4,97.8,94,69,94,54   C94,37.4,80.6,24,64,24z M64,74c-11,0-20-9-20-20s9-20,20-20s20,9,20,20S75,74,64,74z"
        />
      </g>
    </svg>
  );
};

AddressIcon.defaultProps = {
  color: '#00afed',
  size: 24,
};

export default AddressIcon;
