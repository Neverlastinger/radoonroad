import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NextLink({ href, children, ...props }) {
  const { basePath } = useRouter();

  const nativeLink = href.startsWith('/')
    ? `${basePath}${href}`
    : href;

  return (
    <Link href={href} {...props}>
      <a href={nativeLink} {...props}>
        {children}
      </a>
    </Link>
  );
}
