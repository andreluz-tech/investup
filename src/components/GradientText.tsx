import React from 'react';
import { View, TextStyle, Platform, Text } from 'react-native';
import Svg, { Text as SvgText, Defs, LinearGradient, Stop } from 'react-native-svg';

interface GradientTextProps {
  text: string;
  style?: TextStyle;
  colors?: readonly [string, string, ...string[]];
}

export default function GradientText({
  text,
  style,
  colors = ['#FFE5A3', '#D4AF37', '#996515', '#FBF5B7', '#AA771C'],
}: GradientTextProps) {
  if (Platform.OS === 'web') {
    const webStyle: any = {
      ...style,
      backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block',
    };

    return <Text style={webStyle}>{text}</Text>;
  }

  const fontSize = (style?.fontSize as number) || 32;
  const fontWeight = (style?.fontWeight as string) || '900';

  return (
    <View style={{ height: fontSize * 1.3, justifyContent: 'center' }}>
      <Svg height={fontSize * 1.3} width="180">
        <Defs>
          <LinearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {colors.map((color, index) => (
              <Stop
                key={index}
                offset={`${(index / (colors.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </LinearGradient>
        </Defs>
        <SvgText
          fill="url(#goldGradient)"
          fontSize={fontSize}
          fontWeight={fontWeight}
          x="0"
          y={fontSize * 0.9}
        >
          {text}
        </SvgText>
      </Svg>
    </View>
  );
}