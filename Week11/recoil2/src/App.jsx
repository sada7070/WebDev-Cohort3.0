import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { jobAtom, messagingAtom, networkAtom, notificationAtom } from './atoms';

function App() {
  return <RecoilRoot>
      <MainApp></MainApp>
    </RecoilRoot>
}

function MainApp() {
  const networkAtomCount = useRecoilValue(networkAtom);
  const jobAtomCount = useRecoilValue(jobAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const [MessagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);

  return (
    <>
      <button>Home</button>
      
      <button>My Network ({networkAtomCount > 99 ? "99+" : networkAtomCount})</button>
      <button>Jobs ({jobAtomCount})</button>
      <button>Messaging ({MessagingAtomCount})</button>
      <button>Notification ({notificationAtomCount})</button>
      
      <button onClick={() => {
        setMessagingAtomCount(c => c+1);
      }}>Me</button>
    </>
  )
}

export default App
