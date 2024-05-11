interface Props {
  url: string
}

export default function Video({ url }: Props) {
  console.log(url)
  return (
    <video className='h-full w-full rounded-lg' controls>
      <source src={url} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  )
}
