'use client'

import { Tooltip } from "@heroui/react";
import { DrawerIcon } from "../icons/icons";

export default function EmptyChatView({ isOpen, onOpen }: { isOpen: boolean; onOpen: () => void; }) {
  
  return (
    <div className='chat-room text-center text-gray-500 dark:text-gray-400'>
    <div className='message-header'>
    {!isOpen && (
      <div className='md:hidden'>
        <Tooltip content='Open' placement='right'>
          <button className='btn-aside' onClick={onOpen}>
            <DrawerIcon />
          </button>
        </Tooltip>
      </div>
    )}
    </div>
    <div className='flex flex-col justify-center h-full gap-4'>
        <h1 className='text-xl font-semibold'>Start chatting!</h1>
        <h2 className='text-sm text-muted-foreground'>
          Select a friend or chat room from the list.
        </h2>
      </div>
        {/* <Messages roomId={''} />
        <TextArea id={''} participants={[]} onRefresh={() => {}}/> */}
    </div>
  )
}
