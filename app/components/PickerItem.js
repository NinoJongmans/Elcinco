import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import BodyText from "./BodyText";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <BodyText style={styles.text}>{label}</BodyText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
