type TBlogs = {
	details: string
	title: string,
	date: string,
};

type TProjectCardProps = {
    project: {
        url: string
        title: string
        stacks: string[]
    }
}

type TProjectDetail = {
    project: {
        image: string
        url: string
        title: string
        description: string
        stacks: string[]
    }
}