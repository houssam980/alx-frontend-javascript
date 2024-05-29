import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((resol) => {
      console.log(`${resol[0].body} ${resol[1].firstName} ${resol[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
