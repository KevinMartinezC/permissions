import {
  View,
  Text,
  Pressable,
  StyleSheet,
  PressableProps,
} from "react-native";
import React from "react";

interface Props extends PressableProps {
  children: string;
}

const ThemedPressable = ({ children, ...rest }: Props) => {
  return (
    <Pressable style={style.btnPrimary} {...rest}>
      <Text style={style.textStyle}>{children}</Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  btnPrimary: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    margin: 10,
  },
  textStyle: {
    color: "white",
  },
});
export default ThemedPressable;
