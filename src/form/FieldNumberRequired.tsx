import * as React from 'react';
import { FieldProp } from 'react-typed-form';

import FieldNumber from './FieldNumber';

type Props = Omit<React.ComponentProps<typeof FieldNumber>, 'field'> & {
  field: FieldProp<number>;
};

export default React.memo(function FieldNumberRequired({
  field,
  ...rest
}: Props) {
  return (
    <FieldNumber
      field={{
        ...field,
        value: field.value ?? 0,
        handleValueChange: (value) => field.handleValueChange(value ?? 0),
      }}
      {...rest}
    />
  );
});
