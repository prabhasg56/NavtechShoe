import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import ProductCard from '../../components/Users/ProductCard';
import { baseUrl } from '../../redux/store';
import { getCartData, getProductsData, getProductsDataFailure, getProductsDataSuccess } from '../../redux/action';


const ProductView = ({ navigation }) => {
  const { products, isLoading } = useSelector((store) => store);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    dispatch(getProductsData());

    try {
      const response = await axios.get(`${baseUrl}/products`);

      dispatch(getProductsDataSuccess(response.data));

    } catch (err) {
      console.warn(err);

      dispatch(getProductsDataFailure());
    }

  }

  useEffect(() => {
    fetchProducts();
  }, [isLoading]);

  return (
    <>

      <ScrollView>
        <View style={styles.container}>

          {
            products?.map((item) => {
              return (
                <ProductCard key={item.id} item={item} navigation={navigation} />
              )
            })
          }
        </View>
      </ScrollView>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    marginTop: 15,
    justifyContent: "center"
  }
})

export default ProductView;