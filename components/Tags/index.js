import cn from 'classnames';
// import NextLink from 'components/NextLink';
import styles from './index.module.scss';

/**
 * Represents a list of article tags.
 */
export default function Tags({ tags, className, tagClassName, onTagClick, activeTags }) {
  return (
    <div className={cn(styles.tags, { [className]: !!className })} data-testid="tag-list">
      {tags.map((tag) => (
        <Tag
          key={tag.name}
          tag={tag}
          className={tagClassName}
          onClick={onTagClick}
          active={activeTags && activeTags.includes(tag)}
        />
      ))}
    </div>
  );
}

function Tag({ tag, className, onClick, active }) {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      href={`/t/${tag.slug}`}
      className={cn(styles.tag, { [styles.active]: !!active, [styles.noMobileHover]: !!onClick, [className]: !!className })}
      data-testid={`tag-${tag}`}
      onClick={onClick && ((e) => { onClick(e, tag); })}
    >
      {tag.name}
    </div>
  );
}
