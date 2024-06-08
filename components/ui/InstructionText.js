import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: "#e3e700ff",
    fontSize: 24,
    fontStyle: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.137)", // 'rgba(0, 0, 0, 0.212)
    padding: 12,
    borderRadius: 8,
  },
});
