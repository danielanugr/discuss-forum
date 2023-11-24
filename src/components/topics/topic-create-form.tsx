import {
  Button,
  Input,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';
import { createTopic } from '@/utils';

export default function TopicCreateForm() {
  return (
    <Popover placement='left'>
      <PopoverTrigger>
        <Button color='primary'>Create A Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={createTopic}>
          <div className='flex flex-col gap-4 p-4 w-80'>
            <h3 className='text-lg'>Create a topic</h3>
            <Input
              label='Name'
              labelPlacement='outside'
              placeholder='Topic Name'
            />
            <Textarea
              label='Description'
              labelPlacement='outside'
              placeholder='Describe your topic'
            />
            <Button type='submit'>Submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
