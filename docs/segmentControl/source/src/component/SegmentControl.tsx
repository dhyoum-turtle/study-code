import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type TSegmentedControl<T> = {
  segmentList: Array<T>;
  currentSegment: T;
  setCurrentSegment: React.Dispatch<React.SetStateAction<T>>;
};

export const SegmentedControl = <T extends string>({
  segmentList,
  currentSegment,
  setCurrentSegment,
}: TSegmentedControl<T>) => {
  return (
    <View style={styles.container}>
      {segmentList.map((value, index) => {
        return (
          <Pressable
            key={'segment-' + index}
            style={[
              styles.pressableSegment,
              currentSegment === value && {backgroundColor: '#666'},
            ]}
            onPress={() => setCurrentSegment(value)}>
            <Text style={{color: currentSegment === value ? '#fff' : '#aaa'}}>
              {value}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#444',
    borderRadius: 12,
    padding: 2,
  },
  pressableSegment: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 7,
    borderRadius: 10,
  },
});
