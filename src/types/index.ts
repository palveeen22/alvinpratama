import type { en } from "@/lib/dictionaries/en";
import type { LANGS } from "@/lib/internationalizations";


export type Lang = (typeof LANGS)[number];
export type Dictionary = typeof en;
export type DictionaryKey = keyof typeof en;

export type TBlogs = {
    details: string
    title: string,
    date: string,
};

export type TProjectCardProps = {
    project: {
        url: string
        title: string
        stacks: string[]
        desc: string | undefined
        id: string
        slug: string
    }
}

export type TProjectDetail = {
    project: {
        image: string
        url: string
        title: string
        description: string
        stacks: string[]
    }
}

