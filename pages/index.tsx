import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Page,
  Input,
  Text,
  Display,
  Button,
  Grid,
  Select,
  Spacer,
  Card,
  Loading,
} from '@geist-ui/core'
import { useState, useEffect } from 'react'

const Home = () => {
  const [count, setCount] = useState([...Array(400).keys()])

  const simulateCrash = () => {
    const container = document?.querySelector?.('#root')
    if (container) {
      container.animate(
        [
          { offset: 0, transform: 'translate3d(0, 0, 0)' },
          { offset: 0.5, transform: 'translate3d(10px, -10px, 0)' },
          { offset: 1, transform: 'translate3d(0, 0, 0)' },
        ],
        1000
      )
    }
  }

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#000000" />
      </Head>

      <Page
        style={{
          textAlign: 'center',
          width: '100%',
          fontFamily: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
        }}
      >
        <Text h1>iOS 15 Safari Test Case</Text>
        <Spacer h={2} />
        <Button
          onClick={simulateCrash}
          type="secondary"
          ghost
          style={{
            margin: '0 auto',
          }}
        >
          Click Me
        </Button>
        <Spacer h={2} />
        <Text p>
          Clicking once should force a full render. Clicking again should crash
          WebKit{' '}
        </Text>
        <Spacer h={2} />
        <Spacer h={2} />
        <Grid.Container gap={1} justify="space-around" id="root">
          {count?.map((c, i) => {
            return (
              <div className="container" id={`container-${c}`} key={i}>
                <div className="item">
                  <div className="native">
                    <div className="inner">
                      <img src={'https://picsum.photos/200/300'} />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Grid.Container>
      </Page>
    </>
  )
}

export default Home
