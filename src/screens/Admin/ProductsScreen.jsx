import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";

import Products from "../../components/Admin/Products";
import { baseUrl } from '../../redux/store';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData, getProductsDataFailure, getProductsDataSuccess } from "../../redux/action";


const ProductsScreen = ({ navigation }) => {

  const { products } = useSelector((store, action) => store)
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
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <Products text={false} prodName={products} />
      </ScrollView>
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 10,
    position: "relative",
  },
  addIconStyle: {
    position: "absolute",
    bottom: 45,
    right: 50,
    width: 34,
    height: 34,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(13, 26, 38, 0.41)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalIcon: {
    display: "flex",
    backgroundColor: "#0D1A26",
    flexDirection: "row",
    paddingVertical: 7,
    paddingHorizontal: 10,
    width: 130,
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
  },
  modalIconBtns: {
    marginTop: 20,
    marginBottom: 7,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
});
