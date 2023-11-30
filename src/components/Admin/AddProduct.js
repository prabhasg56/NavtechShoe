import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { useDispatch } from 'react-redux';
import { baseUrl } from '../../redux/store';
import axios from 'axios';

const AddProduct = ({ navigation }) => {

    const [productData, setProductData] = useState({
        brandName: '',
        image: '',
        description: '',
        price: '',
        size: '',
    });

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
            const response = await axios.post(`${baseUrl}/products`, productData)

            setProductData({
                brandName: '',
                image: '',
                description: '',
                price: '',
                size: '',
            })
        } catch (error) {
            console.log(error)
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
                    value={productData.image}
                    label="Enter Image URL"
                    onChangeText={(newValue) => handleChange("image", newValue)}
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