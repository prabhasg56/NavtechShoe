import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { heart, heartOutline, } from 'ionicons/icons';

import { getCartData, getCartDataFailure, getCartDataSuccess } from '../../redux/action';
import { baseUrl } from '../../redux/store';
import { Shoe2, AddIcon, RemoveIcon, DeleteICon } from '../../../assets/index';


const CartScreen = () => {

    const { products } = useSelector((store, action) => store);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    dispatch(getCartData());

    try {
      const response = await axios.get(`${baseUrl}/cart`);

      dispatch(getCartDataSuccess(response.data));

    } catch (err) {
      console.warn(err);

      dispatch(getCartDataFailure());
    }

  }

  useEffect(() => {
    fetchProducts();
  }, []);


  let quantity = 1;
  let amnt = {
    subtotal: "3,499",
    delivery: 40,
    grandTotal: 3539
  }

  return (
    <View style={{ marginTop: 10 }}>
      <View style={{ flexDirection: "row", gap: 10, padding: 3 }}>

        <View style={{ alignItems: "center", gap: 10 }}>
          <Image source={Shoe2} alt='shoe' />
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image source={RemoveIcon} alt='icon' style={styles.iconAdd} />
            <Text style={{ fontSize: 15, fontWeight: "800" }}>{quantity}</Text>
            <Image source={AddIcon} alt='icon' style={styles.iconAdd} />
          </View>
        </View>

        <Card />

      </View>

      <View style={{ padding: 12, marginBottom: '50px' }}>
        <View gap={0} >
          <View style={{ ...styles.subTotal, paddingHorizontal: 5, paddingVertical: 10, borderColor: "#9E9898", borderTopWidth: 1 }}>
            <Text>Subtotal</Text>
            <Text>₹ {amnt.subtotal}</Text>
          </View>
          <View style={{ ...styles.subTotal, paddingHorizontal: 5, paddingVertical: 10, borderBottomWidth: 1 }}>
            <Text>Delivery</Text>
            <Text>₹ {amnt.delivery}</Text>
          </View>

        </View>
        <View style={styles.grandTotal} >
          <Text style={styles.grandTotalTxt}>Grand Total</Text>
          <Text style={styles.grandTotalTxt}>₹ {amnt.grandTotal}</Text>
        </View>
      </View>
    </View>
  )
}


const Card = () => {
  const [wish, setWish] = useState(false);

  return (
    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>

      <View style={{ width: "55%" }}>
        <Text style={styles.title} >Mercedes AMG Petronas </Text>
        <Text style={styles.subTitle}>Men’s Shoes</Text>
        <Text style={styles.subTitle}>Puma White-Silver</Text>
        <Text style={styles.subTitle}>
          SIze 11
        </Text>
      </View>
      <View gap={20} style={{ marginRight: "auto", paddingHorizontal: 5 }}>
        <View >
          <Image source={DeleteICon} style={{ color: "red" }} />
        </View>

        <View >
          <Text style={styles.totalPrice}> ₹3,499</Text>
          <Text style={styles.subtxt}>Incl. of taxes</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#191919"
  },
  subTitle: {
    fontSize: 10,
    fontWeight: "600",
  },
  subtxt: {
    fontSize: 10,
    fontWeight: "400",
  },
  totalPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black"
  },
  iconAdd: {
    fontSize: 15,
    width: 20,
    height: 20
  },
  grandTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    fontSize: 15,
    marginTop: 5,
  },
  grandTotalTxt: {
    fontWeight: "bold",

  },
  subTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 13,
    color: "#9E9898",
    paddingY: 5,
  }
});

export default CartScreen;
