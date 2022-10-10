import { getDatabase, ref, set } from "firebase/database";
import {app} from '../firebase'
export function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase(app);
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}