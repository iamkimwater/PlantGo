import rootReducer from '../store/reducers';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootState = ReturnType<typeof rootReducer>;

export type RootStackParamList = {
  Home: {count: number};
  Login: undefined;
  Signup: {noteId: number};
  AddMyPet: {emoji: number};
  AddPosting: {noteId: number};
  ViewPosting: undefined;
  FindWalkMateBoard: {error: string};
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export type SignupProps = NativeStackScreenProps<RootStackParamList, 'Signup'>;

export type AddMyPetProps = NativeStackScreenProps<
  RootStackParamList,
  'AddMyPet'
>;

export type AddPostingProps = NativeStackScreenProps<
  RootStackParamList,
  'AddPosting'
>;

export type ViewPostingProps = NativeStackScreenProps<
  RootStackParamList,
  'ViewPosting'
>;

export type FindWalkMateBoardProps = NativeStackScreenProps<
  RootStackParamList,
  'FindWalkMateBoard'
>;

export type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>;
