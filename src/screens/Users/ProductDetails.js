import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Shoe2 } from '../../../assets/index';
import { addToCart, stateUpdate } from '../../redux/action';
const ProductDetails = ({ route, navigation }) => {

    const dispatch = useDispatch();

    const { brandName, description, price, size } = route.params;

    const { cart } = useSelector((store) => store);

    const addToCartHandler = async () => {
        dispatch(addToCart({ ...route.params, quantity: 1 }));

        alert("Item added to cart");
        navigation.navigate("Cart");

    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Image source={Shoe2} />
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "500" }}>{brandName}</Text>
                    <Text>{description}</Text>
                    <Text>Size: {size}</Text>
                    <Text style={{ color: "red", fontSize: 15, fontWeight: "400" }}>Price: ₹ {price}</Text>
                </View>
            </View>
            <TouchableOpacity style={[styles.btn, { backgroundColor: "#044C04" }]} onPress={addToCartHandler}>
                <Text style={styles.btnTxt}>ADD TO CART</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
    },
    subContainer: {
        flex: 1,
        flexDirection: "row",
        gap: 20,
        padding: 15
    },
    btn: {
        marginTop: 10,
        marginBottom: 10,
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 18,
        fontSize: "50px",
        fontWeight: "bold",
        padding: 12,
        width: "70%",
    },
    btnTxt: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    }

});

export default ProductDetails