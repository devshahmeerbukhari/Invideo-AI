  // SeeMoreProps.d.ts
import { RouteProp } from '@react-navigation/native';

//type for UserAccount
export type AccountScreenProps = {
  profileName: string;
  profileEmail: string;
  profileImageUri?: string; // Optional prop
};

// RootStackParamList.ts
export type RootStackParamList = {
    Home: undefined;  // No parameters for the Home screen
    SeeMore: { categoryData: any };  // Expecting a `categoryData` parameter for the SeeMore screen
    UserAccount: {
      profileName: string;
      profileEmail: string;
      profileImageUri: string;
    };
    Home2: undefined
  };
  


export type SeeMoreProps = {
  route: RouteProp<RootStackParamList, 'SeeMore'>;
};
