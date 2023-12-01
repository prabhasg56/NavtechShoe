import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";

import { Shoe2, EditImg } from "../../../assets/index";

import { useNavigation } from "@react-navigation/native";

const Product = ({ item }) => {
  const navigation = useNavigation();

  const { brandName, price, description, ordered, stockShoes, size } = item;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.leftView}>
          <Text
            style={{ ...GlobalStyles.semiBoldHeadline, ...styles.textColor }}
          >
            {brandName}
          </Text>
          <Text
            style={{
              ...GlobalStyles.normalHeadline,
              ...styles.textColor,
              ...styles.smallText,
            }}
          >
            {description}
          </Text>
          <Text
            style={{
              ...GlobalStyles.normalHeadline,
              ...styles.textColor,
              ...styles.smallText,
            }}
          >
            Ordered: {ordered}
          </Text>
          <Text
            style={{
              ...GlobalStyles.normalHeadline,
              ...styles.textColor,
              ...styles.smallText,
            }}
          >
            Stock: {stockShoes}
          </Text>
          <Text
            style={{
              ...GlobalStyles.normalHeadline,
              ...styles.textColor,
              ...styles.smallText,
            }}
          >
            S | {size}
          </Text>
          <Text
            style={{
              ...GlobalStyles.semiBoldHeadline,
              ...styles.textColor,
            }}
          >
            ₹{price}
          </Text>
        </View>
        <View style={styles.rightView}>
          <Image source={Shoe2} alt="shoe img"/>
        </View>
      </View>
      <View style={styles.editContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Update Product Details", item)}
        >
          <Image source={EditImg} alt="edit icon"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 10,
    color: "black",
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.17,
    shadowRadius: 12,
    elevation: 7,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
  },
  editContainer: {
    display: "flex",
    alignItems: "flex-end",
    marginTop: 10,
  },
  leftView: {
    flex: 0.6,
  },
  rightView: {
    flex: 0.4,
    display: "flex",
    alignItems: "flex-end",
  },
  textColor: {
    color: "black",
  },
  smallText: {
    fontSize: 12,
    fontWeight: 300,
    lineHeight: 19,
  },
});
