import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface SilverButtonProps {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export default function SilverButton({
  title,
  onPress,
  style,
}: SilverButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[styles.buttonContainer, style]}
    >
      <LinearGradient
        colors={['#475569', '#94A3B8', '#FFFFFF', '#94A3B8', '#475569']}
        locations={[0.0, 0.25, 0.5, 0.75, 1.0]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientPrata}
      >
        <Text style={styles.textoPrata}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    height: 48,
    borderRadius: 50,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  gradientPrata: {
    flex: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  textoPrata: {
    color: '#0F172A',
    fontWeight: '800',
    fontSize: 13,
    letterSpacing: -0.2,
    textAlign: 'center',
    textShadowColor: 'rgba(255, 255, 255, 0.7)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
});