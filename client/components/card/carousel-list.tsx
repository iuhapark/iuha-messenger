'use client'
import {Card, CardHeader, CardFooter, Image, Button} from "@heroui/react";

export default function CarouselList() {
  return (
    <div className='max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8'>
      <Card className='col-span-12 sm:col-span-4 h-[300px]'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>What to chat</p>
          <h4 className='text-white font-medium text-large'>Messages are flooding in</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt='Card background'
          className='z-0 w-full h-full object-cover'
          src='/assets/img/home/pink.gif'
        />
      </Card>
      <Card className='col-span-12 sm:col-span-4 h-[300px]'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Connect a friend</p>
          <h4 className='text-white font-medium text-large'>Match with someone new</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt='Card background'
          className='z-0 w-full h-full object-cover'
          src='/assets/img/home/orange.jpg'
        />
      </Card>
      <Card className='col-span-12 sm:col-span-4 h-[300px]'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Superfast</p>
          <h4 className='text-white font-medium text-large'>Powered by WebSocket & STOMP</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt='Card background'
          className='z-0 w-full h-full object-cover'
          src='/assets/img/home/green.jpg'
        />
      </Card>
      <Card isFooterBlurred className='w-full h-[300px] col-span-12 sm:col-span-5'>
        <CardHeader className='absolute z-10 top-1 flex-col items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>New feature</p>
          <h4 className='text-black font-medium text-2xl'>Profile camera</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt='Card example background'
          className='z-0 w-full h-full scale-125 -translate-y-6 object-cover'
          src='/assets/img/home/black.jpeg'
        />
        <CardFooter className='absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
          <div>
            <p className='text-black text-tiny'>Available soon.</p>
            <p className='text-black text-tiny'>Get notified.</p>
          </div>
          <Button className='text-tiny' color='primary' radius='full' size='sm'>
            Notify Me
          </Button>
        </CardFooter>
      </Card>
      <Card isFooterBlurred className='w-full h-[300px] col-span-12 sm:col-span-7'>
        <CardHeader className='absolute z-10 top-1 flex-col items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Your day your way</p>
          <h4 className='text-white/90 font-medium text-xl'>Customize your mood</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt='Relaxing app background'
          className='z-0 w-full h-full object-cover'
          src='/assets/img/home/blue.jpeg'
        />
        <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
          <div className='flex flex-grow gap-2 items-center'>
            <Image
              alt='Breathing app icon'
              className='rounded-full w-10 h-11 bg-black'
              src='https://heroui.com/images/breathing-app-icon.jpeg'
            />
            <div className='flex flex-col'>
              <p className='text-tiny text-white/60'>Set your status</p>
              <p className='text-tiny text-white/60'>Let friends know</p>
            </div>
          </div>
          <Button radius='full' size='sm'>
            Try it now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
