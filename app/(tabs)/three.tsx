import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text} from "react-native";
import React, { useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE , Region} from "react-native-maps";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SheetManager } from "react-native-actions-sheet";
import { SheetProvider } from "react-native-actions-sheet";
import ExampleScreen from "../src/screen";
import "../src/sheets";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MapActionSheet from "../src/mapaction";

const TabThreeScreen: React.FC = () => { 
  const mapRef = useRef<MapView | null>(null);  

  const handleGoToCoordinates = () => {
    console.log('function');
    const coordinatesToGo: Region = {
      latitude: 48.8566,
      longitude: 2.3522,
      latitudeDelta: 1,
      longitudeDelta: 1,
    };
    if (mapRef.current) {
      mapRef.current.animateToRegion(coordinatesToGo, 1000);
    }
  };

  var markers = [
    {
      latitude: 33.88863,
      longitude: 35.49548,
      title: "Beirut",
      description: "Capital",
    },
    {
      latitude: 33.96849,
      longitude: 35.60933,
      title: "Jounieh",
      description: "resto",
    },
  ];

  return (
    <GestureHandlerRootView
      style={{ flex: 1, borderStyle: "solid", borderColor: "red" }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* <MarpHeader navigation={navigation} /> */}
        <MapView
                ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: 33.88863,
            longitude: 35.49548,
            latitudeDelta: 0.1143,
            longitudeDelta: 0.1134,
          }}
          //annotations={markers}
          provider={PROVIDER_GOOGLE}
        >
          {markers.map((mark, i) => {
            return (
              <Marker
                key={i}
                coordinate={{
                  latitude: mark.latitude,
                  longitude: mark.longitude,
                }}
                title={mark.title}
                description={mark.description}
                // image={require("../assets/images/inApp/marker.png")}
              />
            );
          })}
        </MapView>

        <MapActionSheet sheetId="action-sheet" handleGoToCoordinates={handleGoToCoordinates} />
      
        <View style={styles.sheetContainer}>
        <SheetProvider>
          <SafeAreaView style={styles.safeareaview}>
            <TouchableOpacity
              onPress={() => {
                SheetManager.show("action-sheet", {
                  payload: { data: "hello world" },
                });
              }}
              style={styles.btn}
            >
              {/* <Text style={styles.btnTitle}>Open ActionSheet</Text> */}
              <FontAwesome
                    name="search"
                    color="white"
                    size={25}
                  />
              </TouchableOpacity>
          </SafeAreaView>
        </SheetProvider>
      </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  sheetContainer: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  btn: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#fe8a71",
    paddingHorizontal: 10,
    borderRadius: 100,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0.3 * 4, height: 0.5 * 4 },
    shadowOpacity: 0.2,
    shadowRadius: 0.7 * 4,
    width: "100%",
  },
  safeareaview: {
    justifyContent: "flex-end",
    padding: 12,
    alignItems: "flex-end",
    margin: 12,
  },
  btnTitle: {
    color: "white",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 20,
    backgroundColor: "blue",
    borderRadius: 10,
    marginBottom: 20,
  },
  map: {
    width: "100%",
    height: "100%",
    ...StyleSheet.absoluteFillObject,
  },
});
export default TabThreeScreen;