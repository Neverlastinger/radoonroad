import Page from 'components/Page';

export default function Custom404({ errors }) {
  return (
    <Page visibleOnPageTopBar>
      <div style={{ marginTop: '260px', fontSize: '20px' }}>
        404 | Page Not Found
      </div>
      {errors && (
        <ul>
          {errors.map((error) => (
            <li><pre>{JSON.stringify(error)}</pre></li>
          ))}
        </ul>
      )}
    </Page>
  );
}
