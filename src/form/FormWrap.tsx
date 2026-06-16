import * as React from 'react';

import { ErrorList } from '../components';

type Props = {
  formErrorList: string[];
  handleSubmit: () => void;
  className?: string;
  children: React.ReactNode;
};

export default function FormWrap({
  formErrorList,
  handleSubmit,
  className,
  children,
}: Props) {
  return (
    <form
      className={className}
      onSubmit={(ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        handleSubmit();
      }}
    >
      {children}
      <ErrorList errors={formErrorList} />
    </form>
  );
}
