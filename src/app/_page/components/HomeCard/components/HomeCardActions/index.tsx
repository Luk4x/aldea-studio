import { Chip } from '@/ui/Chip';
import { Icon } from '@/ui/Icon';
import { List } from '@/ui/List';
import { cn } from '@/utils/cn';

import { homeCardActionsStyles } from './styles';
import type { HomeCardActionsProps } from './types';

export function HomeCardActions({
  actions,
  className,
  ...homeCardActionsProps
}: HomeCardActionsProps) {
  const styles = homeCardActionsStyles();

  return (
    <div
      className={cn(styles.container(), className)}
      {...homeCardActionsProps}
    >
      <List items={actions} className={styles.list()}>
        {(action, index) => (
          <List.Item key={action.content.toString()}>
            <Chip
              className={cn(
                styles.chip({ isFirst: index === 0 }),
                action.className,
              )}
            >
              {action.content}
              <Icon.Arrow
                direction="right"
                color="neutral-900"
                width={16}
                height={16}
                className={styles.icon()}
              />
            </Chip>
          </List.Item>
        )}
      </List>
    </div>
  );
}
