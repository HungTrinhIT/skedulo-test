import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

import IconLoading from '../Icons/IconLoading';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  className?: string;
};

const Button = (props: ButtonProps) => {
  const { isLoading, className, children, disabled, ...restProps } = props;

  const classes = classNames(
    `
      text-white bg-blue-700 hover:bg-blue-800 
      focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[4px] text-sm px-5 py-2.5 
      text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center
    `,
    className
  );

  const isDisabled = disabled || isLoading;

  return (
    <button className={classes} disabled={isDisabled} {...restProps}>
      {isLoading && <IconLoading />}
      {children}
    </button>
  );
};

export default Button;
