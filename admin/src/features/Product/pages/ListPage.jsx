import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import productApi from 'components/api/productApi';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';

ListPage.propTypes = {};

const useStyle = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(0, 4),
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
  },

  button: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}));

function ListPage(props) {
  const classes = useStyle();
  const [productList, setProductList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await productApi.getAll({ page: 1, size: 5 });
      setProductList(data.products);
    };

    fetchProduct();
  }, []);

  const handleAddProduct = () => {
    history.push(`/products/add`);
  };

  const handleEditProduct = (data) => {
    setProductList(data.products);
  };

  return (
    <div className={classes.box}>
      <Box className={classes.header}>
        <Typography component="h1" variant="h4" className={classes.heading}>
          Products
        </Typography>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={handleAddProduct}
        >
          Add
        </Button>
      </Box>
      <Paper elevation={0}>
        <ProductFilters />
      </Paper>
      <ProductList data={productList} onSubmit={handleEditProduct} />
    </div>
  );
}

export default ListPage;
