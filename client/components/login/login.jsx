import React from "react";
import { View, Text, Touchable, TouchableOpacity, Image } from "react-native";
import Background from "./background.jsx";
import Btn from "./button.jsx";
import { primary } from "./constants.jsx";
import Field from "./field.jsx";

const Login = (props) => {
  return (
    <Background>
      <View
        style={{ alignItems: "center", width: 460, backgroundColor: "#CCC9C0" }}
      >
        <Text
          style={{
            color: "#000000",
            fontSize: 64,
            fontWeight: "bold",
            marginVertical: 20,
            paddingBottom: 90,
          }}
        ></Text>
        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            // borderTopEndRadius:130,
            paddingTop: 100,
            paddingRight: 40,
            alignItems: "center",
          }}
        >
          <Image
            source={require("client/assets/logo-removebg-preview.png")}
            style={{ width: 170, height: 170, marginTop: -300 }}
          />

          <Text
            style={{
              color: "grey",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
              paddingTop: 60,
            }}
          >
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={"email-address"}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              alignItems: "flex-end",
              width: "78%",
              paddingRight: 19,
              marginBottom: 100,
            }}
          >
            <Text style={{ color: primary, fontWeight: "bold", fontSize: 16 }}>
              Forgot Password ?
            </Text>
          </View>
          <Btn
            textColor="grey"
            bgColor={primary}
            btnLabel="Login"
            Press={() => alert("Logged In")}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              alignItems: "center",
              borderRadius: 100,
              width: 150,
              paddingVertical: 4,
              marginVertical: 10,
            }}
          >
            
              
              <Image
                source={require("client/assets/281764-removebg-preview.png")}
                style={{ width: 30, height: 30 }}
              />
           
          </TouchableOpacity>
          
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Don't have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text
                style={{ color: primary, fontWeight: "bold", fontSize: 16 }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
