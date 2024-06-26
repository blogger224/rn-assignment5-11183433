import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import masterCard from "../assets/masterCard.png"

const MasterCard = () => {
    return (
        <View style={styles.card}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, marginTop: 10 }}>
                <Ionicons name="card" size={30} color="#fff" style={styles.icon} />
                <Ionicons name="card" size={30} color="#fff" style={[styles.icon, { alignSelf: "flex-start" }]} />
            </View>

            <View style={{  width: 300, marginTop: 30}}>
                <Text style={styles.cardNumber}>4562  1122  4595  7852</Text>
                <Text style={styles.cardHolder}>AR Jonson</Text>
            </View>

            <View style={[styles.cardDetails, { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" }]}>
                <View style={{ display: "flex", flexDirection: "row", marginBottom: 10, marginTop: 10 }}>
                    <View style={{ marginHorizontal: 20, marginTop: 10}}>
                        <Text style={styles.expiryDate}>Expiry Date: </Text>
                        <Text style={{ fontSize: 20, color: "white"}}>24/2000</Text>
                    </View>

                    <View style={{ marginTop: 10}}>
                        <Text style={styles.cvv}>CVV:</Text>
                        <Text style={{ fontSize: 20, color: "white"}}>698</Text>
                    </View>
                </View>



                <View style={{ marginBottom: 10}}>
                    <Image source={masterCard} style={{ width: 90, height: 70 }} />
                    <Text style={styles.cardType}>Mastercard</Text>
                </View>
            </View>
        </View>
    );
};

export default MasterCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#3b3b3b',
        width: 320,
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: 30
    },
    icon: {
        alignSelf: 'flex-end',
    },
    cardNumber: {
        color: '#fff',
        fontSize: 25,
        marginVertical: 10,
        textAlign: "center"
    },
    cardHolder: {
        color: '#fff',
        fontSize: 18,
        marginVertical: 15,
        marginLeft: 20
    },
    cardDetails: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    expiryDate: {
        color: 'gray',
        fontSize: 12,
        marginLeft: 5,
        marginBottom: 10
    },
    cvv: {
        color: 'gray',
        fontSize: 12,
        marginRight: 5,
        marginBottom: 10
    },
    cardType: {
        color: '#fff',
        fontSize: 18,
        alignSelf: 'flex-end',
    },
});