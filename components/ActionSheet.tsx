import { StyleSheet } from "react-native";
import React, { useRef } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const ActionSheet = ({ handleClose, children, heightt }) => {
  const bottomSheetRef = useRef(null);

  const snapPoints = [heightt];

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose={false} //true
      enableContentPanningGesture={false} //true
      enableHandlePanningGesture={false} //true
      // onClose={handleClose}
      backgroundStyle={styles.backgroundStyle}
      handleComponent={null}
    >
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheet>
  );
};

export default ActionSheet;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "rgba(255,255,255,0.82)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});