import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.transcriptWrapper}>
        <View style={styles.transcriptContainer}>
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Text style={styles.transcriptText}>
              {/* Example transcript text, replace with actual lyrics or transcript */}
              This is the first line of the transcript. {'\n'}
              Here comes the second line, smoothly scrolling. {'\n'}
              The third line appears as you scroll down. {'\n'}
              More lines to show the effect. {'\n'}
              Keep scrolling for more transcript. {'\n'}
              This mimics a music app lyrics display. {'\n'}
              Enjoy the smooth scrolling experience! {'\n'}
            </Text>
          </ScrollView>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.redCircleButton} activeOpacity={0.7}>
          {/* No functionality, just UI */}
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  transcriptWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  transcriptContainer: {
    width: '100%',
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#f5f5f5',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  scrollView: {
    flex: 1,
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 32,
  },
  transcriptText: {
    fontSize: 28,
    lineHeight: 38,
    color: '#222',
    fontWeight: '500',
  },
  redCircleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#e53935',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#e53935',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
});
