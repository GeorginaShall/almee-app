import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import MapView, { Region } from 'react-native-maps';

interface MapActionSheetProps extends SheetProps {
  handleGoToCoordinates: () => void;
}
  
  const MapActionSheet: React.FC<MapActionSheetProps> = (props) => {
    const { handleGoToCoordinates } = props;

  console.log('opening action sheet');
  return (
    <ActionSheet
      id={props.sheetId}
      statusBarTranslucent={false}
      drawUnderStatusBar={false}
      gestureEnabled={true}
      containerStyle={{
        paddingHorizontal: 12,
      }}
      springOffset={50}
      defaultOverlayOpacity={0.3}>
        <View style={styles.bottomBtn}>
      <Text
        style={{
          marginTop: 20,
          marginBottom:40,
          color: 'black',
        }}>
        Pressing yes or no will return the result back to the caller.
      </Text>
      <View >
        <TouchableOpacity onPress={() => {
      handleGoToCoordinates();
      SheetManager.hide(props.sheetId, {
        payload: false,
      });
    }}  style={styles.btn}>
          <Text style={styles.btnTitle}>Go to Specific Coordinates</Text>
        </TouchableOpacity>
      </View></View>
    </ActionSheet>
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
  actionSheetContent: {
    padding: 20,
  },
  close: {
    position: "absolute",
    top: 200,
  },
  map: {
    width: "100%",
    height: "100%",
    ...StyleSheet.absoluteFillObject,
  },
  bottomBtn: {
    minHeight:'50%'
  },
});

export default MapActionSheet;
