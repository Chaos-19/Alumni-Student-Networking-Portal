export interface QuestionPostType {
    author: Author;
    created_at: string;
    content: string;
    tags: string[];
    likes: number;
    retweets: number;
    replies: number;
    title: string;
    comment: Comment[];
}

export interface Author {
    username: string;
    profile_image_url: string;
}

export interface Comment {
    user: Author;
    date: string;
    text: string;
    code?: string;
    likes: number;
    dislikes: number;
    replies: Reply[] ;
}

export interface Reply {
    user: string;
    date: string;
    text: string;
    likes: number;
    replies?: Reply[];
}