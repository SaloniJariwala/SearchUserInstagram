import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Card} from '@rneui/base/dist/Card';
import {Avatar} from '@rneui/themed';
import styles from './src/style';
import {Icon} from 'react-native-elements';
import Verified from './assets/verified-badge-svgrepo-com.svg';

const App = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState();
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    if (username) {
      console.log('API call');
      setIsLoading(true);
      fetch(
        `http://v2.aigrow.me/clients/api/ig/ig_profile?ig=${username}&api_key=a66943a8-dff9-43a8-a669-a657a5f5a669&response_type=short&corsEnabled=true`,
      )
        .then(res => res.json())
        .then(json => {
          console.log(json[0]);
          if (json[0].name === 'INVALID_USERNAME') {
            setNotFound(true);
          } else {
            setUser(json[0]);
            setIsVerified(json[0].is_verified);
          }
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => setIsLoading(false));
    }
  };

  const handleTextChange = text => {
    setUsername(text);
    if (text.length > 3) {
      setTimeout(handleSearch(), 2000);
    }
  };

  const handleOpenInstagram = () => {
    const url = 'https://www.instagram.com/';
    Linking.openURL(url);
  };

  return (
    <SafeAreaView>
      <View style={styles.heading}>
        <Text style={styles.headerTitle}>Search profiles</Text>
        <Text style={styles.subHeader}>can search any instagram profiles</Text>
        <View>
          <TextInput
            style={styles.searchInput}
            placeholder="Enter Instagram Username"
            onChangeText={handleTextChange}
          />
          <Button onPress={handleSearch} title="Search" />
        </View>
      </View>
      <Card.Divider />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        user && (
          <View style={styles.cardStyle}>
            <Avatar
              size={76}
              rounded
              source={{
                uri: user.hd_profile_pic_url_info.url,
              }}
            />
            <View style={styles.usernameStyle}>
              <Text style={styles.titleStyle}>@{user.username}</Text>
              {isVerified && <View style={styles.verifiedStyle} />}
            </View>
            <Text style={styles.nameStyle}>{user.full_name}</Text>
            <Text style={styles.bioStyle}>{user.biography}</Text>
            <Card.Divider />
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <View style={styles.popularity}>
                <Text style={{color: 'black', textAlign: 'center'}}>
                  {user.follower_count}
                </Text>
                <Text style={{fontSize: 10, textAlign: 'center'}}>
                  Followers
                </Text>
              </View>
              <View style={styles.popularity}>
                <Text style={{color: 'black', textAlign: 'center'}}>
                  {user.following_count}
                </Text>
                <Text style={{fontSize: 10, textAlign: 'center'}}>
                  Following
                </Text>
              </View>
              <View style={styles.popularity}>
                <Text style={{color: 'black', textAlign: 'center'}}>
                  {user.media_count}
                </Text>
                <Text style={{fontSize: 10, textAlign: 'center'}}>Posts</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.openBtnStyle}
              onPress={handleOpenInstagram}>
              <Text style={styles.btnTextStyle}>Open in Instagram</Text>
            </TouchableOpacity>
          </View>
        )
      )}
    </SafeAreaView>
  );
};

export default App;
