import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  makeStyles,
  OutlinedInput,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { MAX_PRODUCT_QUANTITY, MIN_PRODUCT_QUANTITY } from 'constant';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { getErrorMessageRHF, numberParsePositiveInt, productQuantityClamp } from 'utils';

/**
 * @typedef {import('@material-ui/core').ButtonProps} ButtonProps
 */

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  submitCallback: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {},
  inputGroup: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'stretch',
    minWidth: '135px',
    maxWidth: '200px',

    '& .MuiInputBase-root': {
      borderRadius: 0,
    },
  },
  left: {
    borderRadius: '50px 0 0 50px !important',
  },
  right: {
    borderRadius: '0 50px 50px 0 !important',
  },
  input: {
    textAlign: 'center',
  },
}));

const AdjustButton = withStyles({
  root: {
    borderRadius: 0,
    minWidth: 40,
    '& .MuiSvgIcon-root': {
      fontSize: 14,
    },
  },
})((/** @type {ButtonProps} */ props) => <Button variant="outlined" size="small" {...props} />);

function QuantityField(props) {
  const classes = useStyles();
  const { form, name, label, disabled, quantityMax } = props;
  console.log(quantityMax);
  const { hasError, errorMessage } = getErrorMessageRHF(form, name);

  const addQuantity = (value, add) => {
    const newValue = numberParsePositiveInt(value) + add;
    form.setValue(name, newValue);
    props?.submitCallback();
  };

  const updateValueOnBlur = (name, value) => {
    const parsedValue = numberParsePositiveInt(value, 1);
    form.setValue(name, productQuantityClamp(parsedValue));
  };

  return (
    <FormControl error={hasError} fullWidth margin="normal" variant="outlined" size="small">
      <Typography>{label}</Typography>

      <Controller
        name={name}
        control={form.control}
        render={({ onChange, onBlur, value, name }) => {
          const parsedValue = numberParsePositiveInt(value, 1);
          return (
            <Box className={classes.inputGroup}>
              <AdjustButton
                className={classes.left}
                disabled={disabled || value <= MIN_PRODUCT_QUANTITY}
                onClick={() => addQuantity(value, -1)}
              >
                <Remove />
              </AdjustButton>

              <OutlinedInput
                color="secondary"
                classes={{
                  input: classes.input,
                }}
                id={name}
                type="text"
                disabled={disabled}
                // bind render props of Controller
                value={productQuantityClamp(parsedValue)}
                onChange={onChange}
                onBlur={(e) => updateValueOnBlur(name, e.target.value)}
              />

              <AdjustButton
                className={classes.right}
                disabled={disabled || value >= quantityMax}
                onClick={() => addQuantity(value, +1)}
              >
                <Add />
              </AdjustButton>
            </Box>
          );
        }}
      />
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
}

export default QuantityField;
