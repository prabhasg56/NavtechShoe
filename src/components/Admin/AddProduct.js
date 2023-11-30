import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import { TextInput, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '../../redux/store';
import { getProductsDataSuccess } from '../../redux/action';


const AddProduct = ({ navigation }) => {

    const [productData, setProductData] = useState({
        brandName: '',
        description: '',
        stockShoes: null,
        ordered: null,
        price: null,
        size: null,
    });

    const dispatch = useDispatch();

    const handleChange = (field, newValue) => {
        if (newValue !== undefined) {
            setProductData((prev) => {
                return {
                    ...prev,
                    [field]: newValue
                }
            })
        }
    }

    const handleSubmit = async () => {
        try {
            if (productData.brandName && productData.description && productData.price && productData.size) {
                const response = await axios.post(`${baseUrl}/products`, productData);

                // dispatch(getProductsDataSuccess(response.data));
                alert("Product added successfully");

                navigation.navigate("All Products");

                setProductData({
                    brandName: '',
                    description: '',
                    stockShoes: null,
                    ordered: null,
                    price: null,
                    size: null,
                })
            } else {
                console.warn("Please provide a product details!")
            }
        } catch (error) {
            console.warn(error);
        }

    }

    return (
        <View>
            <View style={styles.container}>
                <TextInput
                    mode="outlined"
                    value={productData.brandName}
                    label="Enter Product Name"
                    onChangeText={(newValue) => handleChange("brandName", newValue)}
                />
                <TextInput
                    mode="outlined"
                    value={productData.ordered}
                    label="Enter No. Of Ordered Shoes "
                    onChangeText={(newValue) => handleChange("ordered", newValue)}
                />
                <TextInput
                    mode="outlined"
                    value={productData.stockShoes}
                    label="Enter No. Of Stock Shoes "
                    onChangeText={(newValue) => handleChange("stockShoes", newValue)}
                />
                <TextInput
                    mode="outlined"
                    value={productData.price}
                    label="Enter Price"
                    onChangeText={(newValue) => handleChange("price", newValue)}
                />
                <TextInput
                    mode="outlined"
                    value={productData.description}
                    label="Enter Description "
                    onChangeText={(newValue) => handleChange("description", newValue)}
                />
                <TextInput
                    mode="outlined"
                    value={productData.size}
                    label="Enter size"
                    onChangeText={(newValue) => handleChange("size", newValue)}
                />

                <TouchableOpacity style={[styles.btn, { backgroundColor: "#044C04" }]} onPress={handleSubmit}>
                    <Text style={styles.btnTxt}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: "#8C0404" }]} onPress={() => navigation.navigate("All Products")}>
                    <Text style={styles.btnTxt}>Cancel</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: "5%",
        gap: 10,
    },
    btn: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
        borderRadius: 18,
        fontSize: "50px",
        fontWeight: "bold",
        padding: 12,
    },
    btnTxt: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    }

})

export default AddProduct