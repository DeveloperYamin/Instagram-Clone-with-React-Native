import { Image, StyleSheet, View } from "react-native";
import SignUpForm from "../components/SignUp/SignUpForm";

const SignUpScreen = () => {
  const INSTAGRAM_LOGO =
    "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-256.png";
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
            </View>
            <SignUpForm/>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});
