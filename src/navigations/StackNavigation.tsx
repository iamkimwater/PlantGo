import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import AddMyPet from '../screens/AddMyPet';
import AddPosting from '../screens/AddPosting';
import ViewPosting from '../screens/ViewPosting';
import FindWalkMateBoard from '../screens/FindWalkMateBoard';
import usePalette from '../hooks/usePalette';
import {RootStackParamList, RootState} from './Types';
import {useEffect} from 'react';
import {IPalette} from '../hooks/Types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigation() {
  const palette: IPalette = usePalette();
  const {me} = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (me) {
      // setTimeout(() => {
      //   SplashScreen.hide();
      // }, 1000);
    }
  }, [me]);

  return (
    <NavigationContainer>
      {!me ? (
        <Stack.Navigator
          screenOptions={{
            contentStyle: {
              flex: 1,
              backgroundColor: palette.THEME_COLOR,
              paddingLeft: 12,
              paddingRight: 12,
            },
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShadowVisible: false,
              headerTitle: 'Lavendi',
              headerTitleStyle: {fontSize: 20},
              contentStyle: {
                flex: 1,
                backgroundColor: palette.THEME_COLOR,
                paddingLeft: 12,
                paddingRight: 12,
              },
            }}
          />
          <Stack.Screen
            name="AddMyPet"
            component={AddMyPet}
            options={{
              headerShadowVisible: false,
              headerTitle: '',
              headerTitleStyle: {fontSize: 20},
              contentStyle: {
                flex: 1,
                backgroundColor: palette.THEME_COLOR,
                paddingLeft: 12,
                paddingRight: 12,
              },
            }}
          />
          <Stack.Screen
            name="AddPosting"
            component={AddPosting}
            options={{
              headerShadowVisible: false,
              headerTitle: '',
              headerTitleStyle: {fontSize: 20},
              contentStyle: {
                flex: 1,
                backgroundColor: palette.THEME_COLOR,
                paddingLeft: 12,
                paddingRight: 12,
              },
            }}
          />
          <Stack.Screen
            name="ViewPosting"
            component={ViewPosting}
            options={{
              headerShadowVisible: false,
              headerTitle: '',
              headerTitleStyle: {fontSize: 20},
              contentStyle: {
                flex: 1,
                backgroundColor: palette.THEME_COLOR,
                paddingLeft: 12,
                paddingRight: 12,
              },
            }}
          />
          <Stack.Screen
            name="FindWalkMateBoard"
            component={FindWalkMateBoard}
            options={{
              headerShadowVisible: false,
              headerTitle: '설정',
              headerTitleStyle: {fontSize: 20},
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default StackNavigation;
