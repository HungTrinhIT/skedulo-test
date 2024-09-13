import classNames from 'classnames';
import { PropsWithChildren } from 'react';

type PageLayoutProps = PropsWithChildren & {
  className?: string;
};

const PageLayout = ({ className, children }: PageLayoutProps) => {
  const classes = classNames(
    'max-w-[1440px] px-[24px] md:px-[40px] lg:px-[6%] m-[0_auto]',
    className
  );
  return <div className={classes}>{children}</div>;
};

export default PageLayout;
