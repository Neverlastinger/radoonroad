export default function Custom404({ errors }) {
  return (
    <div>
      <div>
        404 | Page Not Found
      </div>
      {errors && (
        <ul>
          {errors.map((error) => (
            <li><pre>{JSON.stringify(error)}</pre></li>
          ))}
        </ul>
      )}
    </div>
  );
}
