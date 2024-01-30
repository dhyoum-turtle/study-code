import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type TSegmentedControlAnimation<T> = {
  segmentList: Array<T>;
  currentSegment: T;
  setCurrentSegment: React.Dispatch<React.SetStateAction<T>>;
  componentWidth: number;
};

export const SegmentedControlAnimation = <T extends string>({
  segmentList,
  currentSegment,
  setCurrentSegment,
  componentWidth,
}: TSegmentedControlAnimation<T>) => {
  const pressedSegmentIndex = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(
            ((componentWidth - 4) / segmentList.length) *
              pressedSegmentIndex.value +
              2,
            {
              mass: 0.1,
            },
          ),
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.segmentBar,
          {width: (componentWidth - 4) / segmentList.length},
          animatedStyles,
        ]}
      />
      {segmentList.map((value, index) => {
        return (
          <Pressable
            key={'segment-' + index}
            style={styles.pressableContainer}
            onPress={() => {
              setCurrentSegment(value);
              pressedSegmentIndex.value = index;
            }}>
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
  pressableContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 7,
    borderRadius: 10,
  },
  segmentBar: {
    backgroundColor: '#666',
    height: '100%',
    marginVertical: 2,
    borderRadius: 10,
    position: 'absolute',
  },
});
