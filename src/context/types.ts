export const GET_TRUST = 'GET_TRUST' as const;

export const GET_PERSON = 'GET_PERSON' as const;
export const GET_EXP = 'GET_EXP' as const;

export const GET_PROJECTS = 'GET_PROJECTS' as const;

export const SET_LOADING = 'SET_LOADING' as const;

export const MODAL_OPEN = 'MODAL_OPEN' as const;
export const MODAL_CLOSE = 'MODAL_CLOSE' as const;

export const SUBDUE_NAV = 'SUBDUE_NAV' as const;
export const RESURRECT_NAV = 'RESURRECT_NAV' as const;

type SocialLink = {
    id: number;
    title: string;
    link: string;
  }

export type Person = {
    name: string;
    birthDate: string;
    country: string;
    city: string;
    languages: string;
    img: string;
    avatar: string;
    position: string;
    heroText: string;
    cvLink: string;
    phone: string;
    email: string;
    resumeLink: string;
    social: SocialLink[];
    achievements: (string | null)[];
}
