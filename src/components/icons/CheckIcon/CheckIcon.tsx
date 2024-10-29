import * as React from 'react';
import Icon, { IconProps } from '../Icon';
import '../../../styles/variables.css';
const CheckIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props} viewBox="0 0 24 24">
      <path
        d="M4 11.6129L9.87755 18L20 7"
        stroke="currentColor"
        stroke-width="2"
      />
    </Icon>
  );
};

export default CheckIcon;
