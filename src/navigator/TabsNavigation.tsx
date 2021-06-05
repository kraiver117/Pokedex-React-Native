import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StackNavigation } from './StackNavigation';
import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();

export const TabsNavigation = () =>  {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            tabBarOptions={{
                activeTintColor: '#5856D6',
                labelStyle: {
                    marginBottom: ( Platform.OS === 'ios' ? 0 : 10 ),
                    fontSize: 12
                },
                style: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255, 255, 255, 0.90)',
                    borderWidth: 0,
                    elevation: 0,
                    height: ( Platform.OS === 'ios' ? 80 : 60)
                }
            }}
        >
            <Tab.Screen 
                name="HomeScreen" 
                component={ StackNavigation } 
                options= {{
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            name='list-outline' 
                            color={ color } 
                            size={ 25 } 
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={ Tab2Screen } 
                options= {{
                    tabBarLabel: 'Búsqueda',
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            name='search-outline' 
                            color={ color } 
                            size={ 25 } 
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}