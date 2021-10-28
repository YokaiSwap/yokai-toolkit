# 🥞 Yokai UIkit

Yokai UIkit is a set of React components and hooks used to build pages on Yokai's apps.

## Install

`yarn add @yokaiswap/uikit`

## Setup

### Theme

Before using Yokai UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@yokaiswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@yokaiswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
