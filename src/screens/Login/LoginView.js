import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { User, Lock, Eye, EyeOff } from 'lucide-react-native';
import { baseThemes, accents, alerts } from '../../theme/colors';
import { getStyles } from './Login.styles';

export default function LoginView() {
  const theme = baseThemes.dark;
  const styles = getStyles(theme);

  return (
    <View style={styles.screen}>
        <View style={styles.bgMarquees}>
            <View style={[styles.marqueeContainer, styles.left]}>
                <View style={styles.marqueeTrack}></View>
            </View>
            <View style={[styles.marqueeContainer, styles.right]}>
                <View style={styles.marqueeTrack}></View>
            </View>
            <View style={[styles.marqueeContainer, styles.left]}>
                <View style={styles.marqueeTrack}></View>
            </View>
            <View style={[styles.marqueeContainer, styles.right]}>
                <View style={styles.marqueeTrack}></View>
            </View>
        </View>
        
        <View style={styles.loginBox}>
            <View style={styles.header}>
                <View style={styles.logo}></View>
                <Text style={styles.title}>N-Player</Text>
                <Text style={styles.subTitle}>Welcome to N-PLayer</Text>
                <Text style={styles.description}>Please Log in to access the music</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.inputGroup}>
                    <User style={[styles.icon, styles.user]}/>
                    <TextInput style={styles.input} placeholder="Username"></TextInput>
                </View>
                <View style={styles.inputGroup}>
                    <Lock style={[styles.icon, styles.lock]}/>
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}></TextInput>
                    <TouchableOpacity>
                        <Eye style={[styles.icon, styles.eye]}/>
                        <EyeOff style={[styles.icon, styles.eyeOff]}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}