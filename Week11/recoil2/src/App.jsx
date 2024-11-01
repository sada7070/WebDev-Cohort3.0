import { RecoilRoot, useRecoilValue } from 'recoil';
import { jobAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms';

function App() {
  return <RecoilRoot>
      <MainApp></MainApp>
    </RecoilRoot>
}

function MainApp() {
  const networkAtomCount = useRecoilValue(networkAtom);
  const jobAtomCount = useRecoilValue(jobAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const MessagingAtomCount = useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      
      <button>My Network ({networkAtomCount > 99 ? "99+" : networkAtomCount})</button>
      <button>Jobs ({jobAtomCount})</button>
      <button>Messaging ({MessagingAtomCount})</button>
      <button>Notification ({notificationAtomCount})</button>
      
      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
