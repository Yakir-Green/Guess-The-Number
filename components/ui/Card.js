import { View, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#000c36ff",
    borderRadius: 8,
    // elevation: 1,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: Colors.accent500,
    // shadowOpacity: 0.25,
  },
});
