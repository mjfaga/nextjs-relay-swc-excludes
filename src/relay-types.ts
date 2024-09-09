import type {GetServerSideProps, GetStaticProps, PreviewData} from 'next';
import type {ParsedUrlQuery} from 'querystring';
import type {RecordMap} from 'relay-runtime/lib/store/RelayStoreTypes';

export type RelayPageProps = {
  initialRecords?: RecordMap;
};

export type GetRelayServerSideProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  P extends {[key: string]: any} = {[key: string]: any},
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData
> = GetServerSideProps<P & Required<RelayPageProps>, Q, D>;

export type GetRelayStaticProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  P extends {[key: string]: any} = {[key: string]: any},
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData
> = GetStaticProps<P & Required<RelayPageProps>, Q, D>;
