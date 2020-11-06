import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/app';
import 'firebase/auth';

type Auth = 'loadingUser' | 'authenticated' | 'unauthenticated';

export function useAuth(): Auth {
	const [user, loading, error] = useAuthState(firebase.auth());
	if (loading) {
		return 'loadingUser';
	}
	if (!!error || !user) {
		return 'unauthenticated';
	}
	return 'authenticated';
}
