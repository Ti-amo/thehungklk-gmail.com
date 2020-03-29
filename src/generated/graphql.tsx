export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CommentType = {
   __typename?: 'CommentType';
  id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  likes?: Maybe<Array<Maybe<LikeType>>>;
  dislikes?: Maybe<Array<Maybe<DislikeType>>>;
  isReplied?: Maybe<Scalars['Boolean']>;
  replies?: Maybe<Array<Maybe<CommentType>>>;
  company?: Maybe<CompanyType>;
};

export type CompanyType = {
   __typename?: 'CompanyType';
  id?: Maybe<Scalars['Int']>;
  latinName?: Maybe<Scalars['String']>;
  japaneseName?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  foundDate?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  jobDescription?: Maybe<Scalars['String']>;
  companyDescription?: Maybe<Scalars['String']>;
  bonus?: Maybe<Scalars['String']>;
  jobfair?: Maybe<Jobfair>;
  comment?: Maybe<Array<Maybe<CommentType>>>;
};

export type DislikeOutput = {
   __typename?: 'DislikeOutput';
  statusCode?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
};

export type DislikeType = {
   __typename?: 'DislikeType';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type Jobfair = {
   __typename?: 'jobfair';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type JobfairType = {
   __typename?: 'JobfairType';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type LikeOutput = {
   __typename?: 'LikeOutput';
  statusCode?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
};

export type LikeType = {
   __typename?: 'LikeType';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  addComment?: Maybe<CommentType>;
  addReply?: Maybe<CommentType>;
  like?: Maybe<LikeOutput>;
  dislike?: Maybe<DislikeOutput>;
};


export type MutationAddCommentArgs = {
  companyId: Scalars['Int'];
  content: Scalars['String'];
  sender?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};


export type MutationAddReplyArgs = {
  companyId: Scalars['Int'];
  parentId: Scalars['Int'];
  content: Scalars['String'];
  sender: Scalars['String'];
  year: Scalars['Int'];
};


export type MutationLikeArgs = {
  commentID: Scalars['Int'];
  name: Scalars['String'];
  year: Scalars['Int'];
};


export type MutationDislikeArgs = {
  commentID: Scalars['Int'];
  name: Scalars['String'];
  year: Scalars['Int'];
};

export type RootQueryType = {
   __typename?: 'RootQueryType';
  comments?: Maybe<Array<Maybe<CommentType>>>;
  replies?: Maybe<Array<Maybe<CommentType>>>;
  latestComment?: Maybe<Array<Maybe<CommentType>>>;
  companies?: Maybe<Array<Maybe<CompanyType>>>;
  company?: Maybe<CompanyType>;
  jobfairs?: Maybe<Array<Maybe<JobfairType>>>;
};


export type RootQueryTypeCommentsArgs = {
  companyId: Scalars['Int'];
};


export type RootQueryTypeRepliesArgs = {
  parentId: Scalars['Int'];
};


export type RootQueryTypeLatestCommentArgs = {
  number: Scalars['Int'];
};


export type RootQueryTypeCompanyArgs = {
  id: Scalars['Int'];
};
