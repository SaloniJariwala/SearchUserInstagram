import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  heading: {
    marginTop: 10,
    padding: 10,
  },
  headerTitle: {
    color: '#000000',
    alignSelf: 'center',
    fontSize: 20,
  },
  subHeader: {
    alignSelf: 'center',
  },
  searchInput: {
    alignSelf: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#0000000f',
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: '100%',
    margin: 10,
    marginTop: 20,
  },
  cardStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 2,
    marginTop: 15,
    marginLeft: 50,
    marginRight: 50,
    padding: 20,
    lineHeight: 1,
  },
  titleStyle: {
    color: 'black',
    fontSize: 12,
    fontWeight: '100',
    letterSpacing: 0.5,
  },
  nameStyle: {
    color: '#C1C0C1',
    fontSize: 10,
    marginTop: 10,
  },
  bioStyle: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    color: 'black',
  },
  detailsStyle: {
    color: '#C1C0C1',
    fontSize: 10,
  },
  popularity: {
    marginRight: 15,
    marginLeft: 15,
  },
  openBtnStyle: {
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderColor: '#C13584',
  },
  btnTextStyle: {
    color: '#C13584',
    fontSize: 10,
  },
  usernameStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedStyle: {
    height: 15,
    width: 15,
    borderWidth: 1,
    borderRadius: 50,
    fontSize: 5,
    textAlign: 'center',
    backgroundColor: '#458eff',
    marginHorizontal: 5,
  },
});

export default styles;
