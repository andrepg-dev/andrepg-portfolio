import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || "Andre Ponce's Blog"
    const author = searchParams.get('author') || 'Andre Ponce'

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #f5fbff 0%, #ffffff 100%)',
            padding: '60px',
            justifyContent: 'space-between',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
            <h1
              style={{
                fontSize: '56px',
                fontWeight: 'bold',
                color: '#12283f',
                margin: '0 0 40px 0',
                lineHeight: '1.2',
              }}
            >
              {title}
            </h1>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '2px solid #cde0ee',
              paddingTop: '30px',
              marginTop: '40px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0b63c5 0%, #0851a8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                A
              </div>
              <div>
                <p style={{ margin: '0', color: '#12283f', fontSize: '18px', fontWeight: '600' }}>
                  {author}
                </p>
                <p style={{ margin: '0', color: '#4a6076', fontSize: '14px' }}>
                  Blog
                </p>
              </div>
            </div>
            <p
              style={{
                color: '#4a6076',
                fontSize: '14px',
                margin: '0',
              }}
            >
              andre.zot.so
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (error) {
    console.error('OG error:', error)
    return new Response('Failed', { status: 500 })
  }
}
