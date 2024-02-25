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
} from "next/font/google";

const fira_code = Fira_Code({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});
const fira_mono = Fira_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});
const jetbrains_mono = JetBrains_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});
const source_code_pro = Source_Code_Pro({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});
const ibm_plex_mono = IBM_Plex_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});
const red_hat_mono = Red_Hat_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});
const ubuntu_mono = Ubuntu_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});
const nova_mono = Nova_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});
const roboto_mono = Roboto_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});
const share_tech_mono = Share_Tech_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});

const Fonts = {
  "Fira Code": fira_code,
  "Fira Mono": fira_mono,
  "JetBrains Mono": jetbrains_mono,
  "Source Code Pro": source_code_pro,
  "IBM Plex Mono": ibm_plex_mono,
  "Red Hat Mono": red_hat_mono,
  "Ubuntu Mono": ubuntu_mono,
  "Nova Mono": nova_mono,
  "Roboto Mono": roboto_mono,
  "Share Tech Mono": share_tech_mono,
};

export default Fonts;
