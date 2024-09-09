import {StiggProvider} from '@stigg/react-sdk';

export default function Home() {
  return (
    <>
      This is some content
      <StiggProvider apiKey="<STIGG_CLIENT_API_KEY>">more content</StiggProvider>
    </>
  );
}
