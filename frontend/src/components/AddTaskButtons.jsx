import { Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

function AddTaskButton() {
  return (
    <Button
      leftIcon={<IconPlus />}
      size="md"
      radius="xl"
      color="blue"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      }}
    >
      Add Task
    </Button>
  );
}

export default AddTaskButton;
