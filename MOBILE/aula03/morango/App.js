import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  const githubLink = 'https://github.com/fefemattoso';

  const openGithubProfile = () => {
    Linking.openURL(githubLink);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>My Space</Text>

        <View style={styles.aboutMe}>
          <Text style={styles.aboutMeText}>
            Hello! My name is Maria Fernanda. I'm an enthusiastic React Native developer.
            I believe that life is like a strawberry - sweet and full of surprises!
          </Text>
          <Image
            style={styles.morango}
            source={{
              uri: 'https://media.tenor.com/nTp2mZtKqBAAAAAi/too.gif'
            }}
          />
          {/* <Image
            style={styles.bluey}
            source={{
              uri: 'https://media1.tenor.com/m/FjRekvNoIngAAAAC/bluey-bingo.gif'
            }}
          /> */}
        </View>

        <View style={styles.education}>
          <Text style={styles.sectionHeading}>Academic education</Text>
          <Text style={styles.educationText}>
            - Bachelor's degree in Computer Science
            - Strawberry University, 1986-1990
          </Text>
        </View>

        <View style={styles.personalDetails}>
          <Text style={styles.sectionHeading}>Personal data</Text>
          <Text style={styles.detailsText}>
            - Email: sorvetinhodemorango@hotmail.com
            - Telephone: (11) 97122-6822
          </Text>
        </View>

        <View style={styles.projects}>
          <Text style={styles.sectionHeading}>Recent Projects</Text>

          <View style={styles.project}>
            <Text style={styles.projectText}>Project 01</Text>
          </View>
        </View>

        <TouchableOpacity onPress={openGithubProfile}>
          <Text style={styles.githubLink}>GitHub Profile</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#ffcbdb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 4
  },
  Text: {
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  aboutMe: {
    marginBottom: 20
  },
  aboutMeText: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: 16,
    marginBottom: 20
  },
  morango: {
    width: 235,
    height: 350,
    marginBottom: 10,
    alignItems: 'center'
  },
  education: {
    marginBottom: 20
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  educationText: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: 16
  },
  personalDetails: {
    marginBottom: 20
  },
  detailsText: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: 16
  },
  projects: {
    width: '100%'
  },
  projectHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  project: {
    marginBottom: 20
  },
  bluey: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  projectText: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: 16
  },
  githubLink: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline'
  },
});



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image } from 'react-native';
// // import { useFonts, Roboto_400Regular } from '@react-native-google-fonts/roboto';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <h1>A vida é um murango!</h1>
//       <Image
//         style={styles.morango}
//         source={{
//           uri : 'https://media.tenor.com/nTp2mZtKqBAAAAAi/too.gif'
//         }}
//       />
      // <Image
      //   style={styles.bluey}
      //   source={{
      //     uri : 'https://media1.tenor.com/m/FjRekvNoIngAAAAC/bluey-bingo.gif'
      //   }}
      // />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffcbdb',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   Text: {
//     fontFamily: 'Arial, sans-serif'
//   },
//   morango: {
//     width: 250,
//     height: 370
//   },
//   bluey: {
//     width: 498,
//     height: 280
//   }
// });