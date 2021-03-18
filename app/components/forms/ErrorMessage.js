import React from "react";
import { StyleSheet } from "react-native";

import BodyText from "../BodyText";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <BodyText style={styles.error}>{error}</BodyText>;
}

const styles = StyleSheet.create({
  error: { 
    color: "red",
    fontSize: 16, 
  },
});

export default ErrorMessage;
