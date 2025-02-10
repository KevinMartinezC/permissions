import React, { PropsWithChildren, useEffect } from "react";
import { usePermissionsStore } from "../store/usePermissions";
import { PermissionStatus } from "@/infrastructure/interfaces/location";
import { router } from "expo-router";
import { AppState } from "react-native";

const PermissionsProvider = ({ children }: PropsWithChildren) => {
  const { locationStatus, checkLocationPermission } = usePermissionsStore();

  useEffect(() => {
    if (locationStatus === PermissionStatus.GRANTED) {
      router.replace("/map");
    } else if (locationStatus !== PermissionStatus.CHECKING) {
      router.replace("/permissions");
    }
  }, [locationStatus]);
  useEffect(() => {
    checkLocationPermission();
  }, []);

  //TODO: Estar pendiente cuando el estado de la aplicacion cambia

  useEffect(() => {
    const subscribsion = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "active") {
        checkLocationPermission();
      }
    });
    return () => {
      subscribsion.remove();
    };
  }, []);

  return <>{children}</>;
};

export default PermissionsProvider;
