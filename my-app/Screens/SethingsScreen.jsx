import { useContext } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../../Context/ThemeContext';

const SettingsScreen = () => {

    const { isEnabled, toggleSwitch } = useContext(ThemeContext);
   
    const settingsOptions = [
        'Language',
        'My Profile',
        'Contact Us',
        'Change Password',
        'Privacy Policy',
    ];

    return (
        <View style={[styles.container, isEnabled && styles.darkTheme]}>
            <Text style={[styles.title, isEnabled && styles.darkText]}>Settings</Text>
            {settingsOptions.map((option, index) => (
                <View key={index}>
                    <View style={styles.optionRow}>
                        <Text style={[styles.optionText, isEnabled && styles.darkText]}>{option}</Text>
                        <Ionicons name="chevron-forward-outline" size={20} color="#000" style={isEnabled && styles.darkText} />
                    </View>
                    <View style={styles.divider} />
                </View>
            ))}
            <View style={styles.themeOption}>
                <Text style={[styles.optionText, isEnabled && styles.darkText]}>Theme</Text>
                <Switch style={{ height: 40}}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            {/* <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    darkText: {
        color: '#fff',
      },

    darkTheme: {
        backgroundColor: 'black',
        color: "white"
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 50,
        textAlign: "center",
        marginTop: 20
    },
    optionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    optionText: {
        fontSize: 20,
        marginTop: 10
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 5,
    },
    themeOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 20
    },
});

export default SettingsScreen;