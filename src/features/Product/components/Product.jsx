import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, makeStyles, Button } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

Product.propTypes = {};

const useStyles = makeStyles((theme) => ({
  box: {
    position: 'relative',
    transition: 'all 0.4s ease',
    '&:hover': {
      boxShadow: '0px 0px 10px #ccc',
      transition: 'all 0.3s ease-in-out',
      transform: 'scale(1.05)',
    },
    // '&:before': {
    //   content: '"',
    //   position: 'absolute',
    //   top: '-15px',
    //   left: '-15px',
    //   width: 'calc(100% + 30px)',
    //   height: 'calc(100% + 108px)',
    //   border: '1px solid #000',
    //   zIndex: '1000',
    //   visibility: 'hidden',
    //   opacity: '0',
    //   transform: 'scale(0.8, 0.8)',
    //   transition: 'all 0.3s ease',
    // },
  },
  btn: {
    background: '#2AC37D',
    fontSize: '1.6rem',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    width: '100%',
    margin: '0 0 20px 0',
    '&:hover': {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      transition: 'all 0.3s ease-in-out',
    },
  },
  img: {
    cursor: 'pointer',
  },
  left: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#5b5b5b',
    lineHeight: '2rem',
    cursor: 'pointer',
    marginBottom: '1rem',
    '&:hover': {
      color: '#2AC37D',
    },
  },
  favorite: {
    color: '#2AC37D',
    fontSize: '2rem',
    position: 'absolute',
    top: '20px',
    right: '18px',
    display: 'block',
    width: '40px',
    height: '40px',
    zIndex: '2',
    backgroundColor: '#4d4d4d',
    webkitBorderRadius: '50%',
    mozBorderRadius: '50%',
    msBorderRadius: '50%',
    borderRadius: '50%',
    webkitTransition: 'all 0.4s ease',
    mozTransition: 'all 0.4s ease',
    transition: 'all 0.4s ease',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#2AC37D',
      color: '#fff',
    },
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontSize: '2rem',
  },
  right: {},
}));

function Product(props) {
  const classes = useStyles();
  return (
    <Box padding={1} className={classes.box}>
      <Box padding={1} minHeight="215px">
        <Box className={classes.favorite}>
          <FavoriteBorderIcon className={classes.icon} />
        </Box>
        <img
          src="http://nouthemes.net/html/trueshoes/images/shoe/2.jpg"
          alt="Giay"
          width="100%"
          className={classes.img}
        />
      </Box>
      <Button className={classes.btn}>Add to cart</Button>
      <Box>
        <Typography variant="h5" className={classes.left}>
          Air Jordan 7 Retro
        </Typography>
        <Typography variant="h5" className={classes.right}>
          <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
            440$
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

export default Product;
