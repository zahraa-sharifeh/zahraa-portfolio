import type { IconType } from 'react-icons'
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi'
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import {
  SiClaude,
  SiCursor,
  SiExpo,
  SiExpress,
  SiGithub,
  SiGithubcopilot,
  SiGo,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNetlify,
  SiPostman,
  SiRailway,
  SiSupabase,
  SiVercel,
  SiVite,
} from 'react-icons/si'
import { TbBrandOpenai, TbBrandReactNative, TbPlugConnected } from 'react-icons/tb'

export type Skill = { name: string; icon: IconType }
export type SkillGroup = { title: string; skills: Skill[] }

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'TypeScript', icon: BiLogoTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'Next.js', icon: RiNextjsFill },
      { name: 'Tailwind', icon: RiTailwindCssFill },
      { name: 'React Native', icon: TbBrandReactNative },
      { name: 'Expo', icon: SiExpo },
    ],
  },
  {
    title: 'Backend & data',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'Go', icon: SiGo },
      { name: 'PostgreSQL', icon: BiLogoPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'JWT', icon: SiJsonwebtokens },
    ],
  },
  {
    title: 'Cloud & tools',
    skills: [
      { name: 'Vercel', icon: SiVercel },
      { name: 'Railway', icon: SiRailway },
      { name: 'Netlify', icon: SiNetlify },
      { name: 'Vite', icon: SiVite },
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
    ],
  },
  {
    title: 'AI agents',
    skills: [
      { name: 'Cursor', icon: SiCursor },
      { name: 'Claude', icon: SiClaude },
      { name: 'ChatGPT', icon: TbBrandOpenai },
      { name: 'Copilot', icon: SiGithubcopilot },
      { name: 'MCP', icon: TbPlugConnected },
    ],
  },
]

export const resumeSkills =
  'React, TypeScript, JavaScript, HTML/CSS, Next.js, Tailwind, React Native / Expo, Node.js, Express, Go, PostgreSQL, MongoDB, Supabase (Auth, RLS), JWT. Deploys on Vercel, Railway, Netlify. Git, GitHub, Postman, Vite. AI agents: Cursor, Claude, ChatGPT, GitHub Copilot, MCP.'
