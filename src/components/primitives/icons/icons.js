import React from 'react'
import { Image } from 'react-native'

export const MenuIcon = () => <Image source={require('../../../../assets/png/menu_gray.png')} style={{ width: 18, height: 18 }} />
export const BackIcon = () => <Image source={require('../../../../assets/png/back.png')} style={{ width: 18, height: 18 }} />
export const FootballIcon = ({style}) => <Image source={require('../../../../assets/png/football_gray.png')} style={[{ width: 20, height: 20 }, style]} />
export const FootballBlueIcon = ({style}) => <Image source={require('../../../../assets/png/football.png')} style={[{ width: 20, height: 20 }, style]} />
export const TennisIcon = ({style}) => <Image source={require('../../../../assets/png/tennis_gray.png')} style={[{ width: 20, height: 20 }, style]} />
export const TennisBlueIcon = ({style}) => <Image source={require('../../../../assets/png/tennis.png')} style={[{ width: 20, height: 20 }, style]} />
export const HockeyIcon = ({style}) => <Image source={require('../../../../assets/png/hockey_gray.png')} style={[{ width: 20, height: 20 }, style]} />
export const HockeyBlueIcon = ({style}) => <Image source={require('../../../../assets/png/hockey.png')} style={[{ width: 20, height: 20 }, style]} />
export const GoIcon = () => <Image source={require('../../../../assets/png/go.png')} style={{ width: 20, height: 20 }} />
export const CupIcon = () => <Image source={require('../../../../assets/png/cup.png')} style={{ width: 20, height: 20 }} />
export const ClockIcon = () => <Image source={require('../../../../assets/png/clock.png')} style={{ width: 20, height: 20 }} />
export const UserIcon = () => <Image source={require('../../../../assets/png/user.png')} style={{ width: 20, height: 20 }} />
export const CalendarIcon = () => <Image source={require('../../../../assets/png/calendar.png')} style={{ width: 20, height: 20 }} />
export const ChevronIcon = () => <Image source={require('../../../../assets/png/chevron.png')} style={{ width: 10, height: 10 }} />