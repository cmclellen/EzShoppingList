interface ErrorFallbackProps {
  error: Error;
}

function ErrorFallback({ error }: ErrorFallbackProps) {
  return <div>{error.message}</div>;
}

export default ErrorFallback;
