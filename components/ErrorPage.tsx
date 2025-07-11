import { Page } from './Page';

export function ErrorPage() {
  return (
    <Page className="min-h-full flex flex-col items-center justify-center">
      <h1 className="my-4 text-5xl font-bold font-serif text-gray-900">
        Something went wrong...
      </h1>
        <p className="my-1 text-base text-gray-700">
          There seems to be a problem. Please try again later.
        </p>
    </Page>
  );
}
