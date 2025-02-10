import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { ThemedText } from "@/presentation/components/shared/ThemedText";
import { usePermissionsStore } from "@/presentation/store/usePermissions";
import ThemedPressable from "@/presentation/components/shared/ThemedPressable";

const PermissionsScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionsStore();
  return (
    <View style={style.container}>
      <ThemedPressable onPress={requestLocationPermission}>
        Habilitar ubicacion
      </ThemedPressable>
      <ThemedText>Estado actual: {locationStatus} </ThemedText>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PermissionsScreen;
