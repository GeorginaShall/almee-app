import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import {SheetProvider} from 'react-native-actions-sheet';
import ExampleScreen from '../src/screen';
import '../src/sheets';

export default function TabTwoScreen() {
  return (
    <>
      <SheetProvider>
        <ExampleScreen />
      </SheetProvider>
    </>
  );
};