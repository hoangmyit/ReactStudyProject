import React, { FC } from 'react';
import { IconProps } from '../icon-props';

const Skype: FC<IconProps> = ({ size, color }) => {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <g data-name="17-skype" id="_17-skype">
        <rect fill={color} height="64" rx="11.2" ry="11.2" width="64" />
        <path
          fill="#fff"
          d="M53.11,36.35a22.06,22.06,0,0,0-25.4-25.49A12.34,12.34,0,0,0,10.9,27.64a22,22,0,0,0,25.4,25.5A12.35,12.35,0,0,0,53.11,36.35Z"
        />
        <path
          fill={color}
          d="M32.05,46a11.54,11.54,0,0,1-9.79-5.53,2.4,2.4,0,1,1,4.19-2.34,6.72,6.72,0,0,0,5.6,3.07c3.61,0,6.4-1.45,6.4-2.7,0-1.76-.51-3.42-6.74-4.33-8.27-1.2-9.16-5.76-9.16-7.67,0-7,5.17-8.5,9.5-8.5,8,0,10.31,5.12,10.4,5.34a2.4,2.4,0,0,1-4.37,2c-.1-.18-1.41-2.51-6-2.51s-4.7,2-4.7,3.7c0,2,3.86,2.75,5,2.92,3.25.48,10.85,1.58,10.85,9.08C43.25,42.89,38.54,46,32.05,46Z"
        />
      </g>
    </svg>
  );
};

Skype.defaultProps = {
  size: 24,
  color: '#00afed',
};

export default Skype;
