  // SeeMoreProps.d.ts
import { RouteProp } from '@react-navigation/native';

// RootStackParamList.ts
export type RootStackParamList = {
    Home: undefined;  // No parameters for the Home screen
    SeeMore: { categoryData: any };  // Expecting a `categoryData` parameter for the SeeMore screen
  };
  


export type SeeMoreProps = {
  route: RouteProp<RootStackParamList, 'SeeMore'>;
};
