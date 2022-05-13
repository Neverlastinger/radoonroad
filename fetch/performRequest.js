const BASE_URL = '/';

/**
 * Performs an HTTP request.
 */
const performRequest = async ({ endpoint, body, searchParams, method = 'GET', baseUrl = BASE_URL, bearer }) => {
  const url = new URL(`${baseUrl}/${endpoint}`);

  if (searchParams) {
    url.search = new URLSearchParams(searchParams).toString();
  }

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  if (bearer) {
    headers.append('Authorization', `Bearer ${bearer}`);
  }

  const response = await fetch(url.toString(), {
    method,
    headers,
    body: JSON.stringify(body)
  });

  const contentType = response.headers.get('content-type');

  if (contentType && contentType.indexOf('application/json') !== -1) {
    const result = await response.json();

    return {
      result,
      response
    };
  }

  if (contentType && contentType.indexOf('text/plain') !== -1) {
    const result = await response.text();

    return {
      result,
      response
    };
  }

  return {
    result: null,
    response
  };
};

export default performRequest;
