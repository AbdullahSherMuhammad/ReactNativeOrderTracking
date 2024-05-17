import {TailwindProvider} from 'tailwind-rn';
import { NavigationContainer } from '@react-navigation/native';   
import utilities from './tailwind.json';
import RootNavigator from './NAvigator/RootNavigator';


export default function App() {
  return (
    //@ts-ignore - Tailwind Provider is missing a type definationnpm install @react-navigation/native-stack
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
    </TailwindProvider>
  );
}


