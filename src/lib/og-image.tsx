import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const ogImageSize = {
  width: 1200,
  height: 630,
}

const newsreaderRegular = readFile(
  join(process.cwd(), 'public/fonts/Newsreader-Regular.ttf'),
)
const newsreaderBold = readFile(
  join(process.cwd(), 'public/fonts/Newsreader-Bold.ttf'),
)

function titleSize(title: string) {
  if (title.length > 90) return 48
  if (title.length > 65) return 54
  if (title.length > 42) return 62
  return 72
}

export async function createOgImage(title: string) {
  const [regular, bold] = await Promise.all([
    newsreaderRegular,
    newsreaderBold,
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#f5fbff',
          color: '#12283f',
          padding: '72px 80px',
          fontFamily: 'Newsreader',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-2px',
          }}
        >
          André Ponce
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 1040,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 72,
              height: 4,
              marginBottom: 28,
              backgroundColor: '#0b63c5',
            }}
          />
          <div
            style={{
              display: 'flex',
              fontSize: titleSize(title),
              fontWeight: 400,
              lineHeight: 1.04,
              letterSpacing: '-1px',
            }}
          >
            {title}
          </div>
        </div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts: [
        {
          name: 'Newsreader',
          data: regular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Newsreader',
          data: bold,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  )
}
