import useClientSide from 'hooks/useClientSide';
import { InstagramEmbed } from 'react-social-media-embed';

export default function InstagramPost({ url }) {
  const isClientSide = useClientSide();

  if (!isClientSide) {
    return null;
  }

  return (
    <InstagramEmbed
      url={url}
      width="100%"
    />
  );
}
