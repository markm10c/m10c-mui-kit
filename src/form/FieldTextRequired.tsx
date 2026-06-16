import * as React from 'react';
import { FieldProp } from 'react-typed-form';

import FieldText from './FieldText';

type PassthroughProps = Omit<React.ComponentProps<typeof FieldText>, 'field'>;

type Props = PassthroughProps & {
  field: FieldProp<string>;
};

/**
 * Duplicate of FieldText, except instead of treating empty input as null, it
 * treats it as empty string.
 */
export default React.memo(function FieldTextRequired({
  field,
  ...rest
}: Props) {
  return (
    <FieldText
      field={field as any}
      onChange={(ev) => {
        field.handleValueChange(ev.target.value);
      }}
      {...rest}
    />
  );
});
