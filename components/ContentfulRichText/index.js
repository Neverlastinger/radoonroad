import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import cn from 'classnames';
import styles from './index.module.scss';

const renderOptions = (links) => {
  const assetMap = new Map();

  if (links) {
    // eslint-disable-next-line no-restricted-syntax
    for (const asset of links.assets.block) {
      assetMap.set(asset.sys.id, asset);
    }
  }

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = assetMap.get(node.data.target.sys.id);

        if (asset.contentType.indexOf('video') !== -1) {
          return (
            <div data-richimage className={styles.image}>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                controls
                width="100%"
                title={asset.title}
              >
                <source src={asset.url} type={asset.contentType} />
              </video>
              <div className={styles.description}>{asset.description}</div>
            </div>
          );
        }

        if (asset.contentType.indexOf('pdf') !== -1 && asset.title) {
          return (
            <p>
              <a href={asset.url} target="_blank" rel="noreferrer">{asset.title}</a>
            </p>
          );
        }

        return (
          <div data-richimage className={styles.image}>
            <a href={asset.url} target="_blank" rel="noreferrer">
              <img src={`${asset.url}?w=800`} alt="" />
              <div className={styles.description}>{asset.title}</div>
            </a>
          </div>
        );
      },
      [INLINES.HYPERLINK]: ({ data }, children) => (
        data.uri.startsWith('https://www.youtube.com/embed/')
          ? (
            <iframe
              width="100%"
              height="450"
              src={data.uri}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <a
              href={data.uri}
              target="_blank"
              rel="noreferrer"
            >
              __ {children}
            </a>
          )
      )
    },
    renderText: (text) => (
      text.split('\n').flatMap((t, i) => (
        [i > 0 && <br key={`br${i}`} />, t]
      ))
    )
  };
};

/**
 * Parses a rich text from Contentful
 */
export default function ContentfulRichText({ text, className }) {
  return (
    <div
      className={cn(styles.richText, { [className]: !!className })}
    >
      {documentToReactComponents(text.json, renderOptions(text.links))}
    </div>
  );
}
