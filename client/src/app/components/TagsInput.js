import React from 'react';
import {Controller} from 'react-hook-form';
import ChipInput from 'material-ui-chip-input'

export const TagsInput = ({name, control, ...props}) => (
  <Controller
    name={name}
    control={control}
    render={({onChange, onBlur, value, ref}) => (
      <ChipInput ref={ref}
                 value={value}
                 onBlur={onBlur}
                 onChange={onChange}
                 {...props} />
    )}>
  </Controller>
);