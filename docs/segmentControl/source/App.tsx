import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {SegmentedControl, SegmentedControlAnimation} from './src/component';

// tab이 n개 있어도 대응가능 (n>1)
const CUSTOM_TAB = {
  SectionA: 'A섹션',
  SectionB: 'B섹션',
  SectionC: 'C섹션',
};
// state의 type으로 쓰고자 object인 CUSTOM_TAB을 변형
type TCustomTab = (typeof CUSTOM_TAB)[keyof typeof CUSTOM_TAB];

const App = (): React.JSX.Element => {
  const [currentFirstTab, setCurrentFirstTab] = useState<TCustomTab>(
    CUSTOM_TAB.SectionA,
  );
  const [currentSecondTab, setCurrentSecondTab] = useState<TCustomTab>(
    CUSTOM_TAB.SectionA,
  );

  // segment control의 width를 위해 측정하는 view의 width
  const initialDeviceWidth = useWindowDimensions().width - 48;

  return (
    <SafeAreaView style={styles.container}>
      {/* 이동 animation이 들어가지 않은 segment control */}
      <View style={styles.controlSection}>
        <Text>animation X</Text>
        <SegmentedControl<TCustomTab>
          currentSegment={currentFirstTab}
          setCurrentSegment={setCurrentFirstTab}
          segmentList={Object.values(CUSTOM_TAB)}
        />
      </View>
      {/* 이동 animation이 들어간 segment control */}
      <View style={styles.controlSection}>
        <Text>animation O</Text>
        <SegmentedControlAnimation<TCustomTab>
          currentSegment={currentSecondTab}
          setCurrentSegment={setCurrentSecondTab}
          segmentList={Object.values(CUSTOM_TAB)}
          componentWidth={initialDeviceWidth}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  controlSection: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
