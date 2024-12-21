// src/styles/globalStyles.js
import { StyleSheet } from 'react-native';
import { colors } from './colors';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 10,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'SyneMono-Regular', // Using SyneMono font for general text
  },
  headerText: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'SyneMono-Bold', // Using SyneMono-Bold font for headers
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'SyneMono-Regular', // Using SyneMono font for button text
  },
  card: {
    backgroundColor: colors.darkGray,
    marginBottom: 15,
    borderRadius: 10,
    padding: 10,
  },
  cardTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'SyneMono-Bold', // Using SyneMono-Bold font for card titles
  },
  cardSummary: {
    color: colors.lightGray,
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'SyneMono-Regular', // Using SyneMono font for card summaries
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: colors.borderGray,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    color: colors.white,
    fontFamily: 'SyneMono-Regular', // Using SyneMono font for input text
  },
  searchBarContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: colors.darkGray,
    borderRadius: 10,
    padding: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
});

export default globalStyles;
