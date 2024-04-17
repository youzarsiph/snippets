import {
  Fira_Code,
  Fira_Mono,
  JetBrains_Mono,
  Source_Code_Pro,
  IBM_Plex_Mono,
  Red_Hat_Mono,
  Ubuntu_Mono,
  Nova_Mono,
  Roboto_Mono,
  Share_Tech_Mono,
  Noto_Sans_Mono,
  Anonymous_Pro,
  Fragment_Mono,
  Spline_Sans_Mono,
} from 'next/font/google'

const noto_sans_mono = Noto_Sans_Mono({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['ui-monospace', 'monospace'],
})

const anonymous_pro = Anonymous_Pro({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['ui-monospace', 'monospace'],
})

const fragment_mono = Fragment_Mono({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['ui-monospace', 'monospace'],
})

const spline_sans_mono = Spline_Sans_Mono({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['ui-monospace', 'monospace'],
})

const fira_code = Fira_Code({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['ui-monospace', 'monospace'],
})

const fira_mono = Fira_Mono({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['ui-monospace', 'monospace'],
})

const jetbrains_mono = JetBrains_Mono({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['ui-monospace', 'monospace'],
})

const source_code_pro = Source_Code_Pro({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['ui-monospace', 'monospace'],
})

const ibm_plex_mono = IBM_Plex_Mono({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['ui-monospace', 'monospace'],
})

const red_hat_mono = Red_Hat_Mono({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['ui-monospace', 'monospace'],
})

const ubuntu_mono = Ubuntu_Mono({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['ui-monospace', 'monospace'],
})

const nova_mono = Nova_Mono({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['ui-monospace', 'monospace'],
})

const roboto_mono = Roboto_Mono({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['ui-monospace', 'monospace'],
})

const share_tech_mono = Share_Tech_Mono({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['ui-monospace', 'monospace'],
})

const Fonts = {
  'JetBrains Mono': jetbrains_mono,
  'Noto Sans Mono': noto_sans_mono,
  'Fragment Mono': fragment_mono,
  'Fira Mono': fira_mono,
  'Fira Code': fira_code,
  'Anonymous Pro': anonymous_pro,
  'Spline Sans Mono': spline_sans_mono,
  'Source Code Pro': source_code_pro,
  'IBM Plex Mono': ibm_plex_mono,
  'Red Hat Mono': red_hat_mono,
  'Ubuntu Mono': ubuntu_mono,
  'Nova Mono': nova_mono,
  'Roboto Mono': roboto_mono,
  'Share Tech Mono': share_tech_mono,
}

export default Fonts
