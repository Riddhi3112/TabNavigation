import {StyleSheet} from 'react-native';
import Colors from '../../theme/colors';


export default StyleSheet.create({
    mainView: {
        flex: 1,
         justifyContent: 'center',
          alignItems: 'center', 
          backgroundColor: Colors.white
    },
    CenterText: {
        marginVertical: 20,
        color: Colors.CenterText, 
        fontWeight: 'bold'
    },
    TabBarMain: {
        backgroundColor: Colors.white,
         paddingTop: 40,
          borderBottomWidth: 0.5, 
          borderBottomColor: Colors.TopTabBorder
    }
})