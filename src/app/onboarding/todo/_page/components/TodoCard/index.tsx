'use client';

import { Card } from '@/ui/Card';
import { Chip } from '@/ui/Chip';
import { Connection } from '@/ui/Connection';
import { Icon } from '@/ui/Icon';
import { List } from '@/ui/List';

import { todoCardCardStyles } from './styles';
import { useTodoCard } from './useTodoCard';
import { todos } from './utils';

export function TodoCard() {
  const { isConnected, isTodosDoneEmpty, onConnect, onClickChipContinue } =
    useTodoCard();

  const styles = todoCardCardStyles();

  return (
    <Card className={styles.card()}>
      <div className={styles.mainIcon()}>
        <Icon.CheckmarkSquare color="danger-500" width={24} height={24} />
      </div>
      <h2 className={styles.subtitle()}>What’s your to-do list?</h2>
      <p className={styles.description()}>
        Nero will use this connection to actively make recommendations based on
        your previous use.
      </p>
      <List items={todos} className={styles.todosList()}>
        {todo => {
          return (
            <List.Item key={todo.label}>
              <Connection
                label={todo.label}
                logo={todo.logo}
                connected={isConnected(todo.label)}
                onConnect={() => onConnect(todo.label)}
              />
            </List.Item>
          );
        }}
      </List>
      <div className={styles.chipContainer()}>
        <button type="button" className={styles.newIntegration()}>
          <Icon.AddCircle width={16} height={16} color="neutral-900" />
          Add a new integration
        </button>
        <Chip disabled={isTodosDoneEmpty} onClick={onClickChipContinue}>
          Continue
          <Icon.Arrow
            direction="right"
            color="neutral-900"
            className={styles.chipIcon()}
            width={16}
            height={16}
          />
        </Chip>
      </div>
    </Card>
  );
}
