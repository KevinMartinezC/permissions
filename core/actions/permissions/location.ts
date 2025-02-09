import * as Location from "expo-location";
import { PermissionStatus } from "@/infrastructure/interfaces/location";

export const requestLocationPermission =
  async (): Promise<PermissionStatus> => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      manualPermissionRequest();
      return PermissionStatus.DENIED;
    }

    return PermissionStatus.GRANTED;
  };

export const checkLocationPermission = async () => {
    const {} = await Location.getForegroundPermissionsAsync()
};

const manualPermissionRequest = async () => {
  // lanzar los ajustes de la aplicacion
};
