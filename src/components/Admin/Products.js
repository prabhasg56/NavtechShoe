import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import Product from "./ProdCard";

const Products = ({ text, prodName }) => {
  return (
    <View
      style={{
        ...styles.container,
        marginTop: text ? 0 : 10,
        borderBottomWidth: text ? 2 : 0,
      }}
    >
      {text && (
        <Text style={{ ...GlobalStyles.boldHeadline, ...styles.headlineText }}>
          Products
        </Text>
      )}
      {prodName?.map((item, index) => (
        <Product item={item.brandName} key={index} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 18,
    paddingVertical: 7,
    paddingBottom: 2,
    borderBottomWidth: 2,
    borderBottomColor: "#0000001A",
  },
  headlineText: {
    marginBottom: 10,
    paddingLeft: 10,
  },
});
