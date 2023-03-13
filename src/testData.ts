export interface ColumnProps {
    id: number;
    title: string;
    avatar?: string;
    description: string;
  }
export interface PostProps {
  id: number;
  title: string;
  content:string;
  image?: string;
  createdAt: any;
  columnId: number;
}  
export const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧,这是的test1专栏，有一段非常有意思的简介，可以更新一下欧这是的test1专栏，有一段非常有意思的简介，可以更新一下欧这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧 这是的test1专栏，有一段非常有意思的简介，可以更新一下欧'
    // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 5,
    title: 'test5的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧 这是的test1专栏，有一段非常有意思的简介，可以更新一下欧'
    // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 6,
    title: 'test6的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }
]

export const testPosts: PostProps[] = [
  {
    id: 1,
    title: '第一篇文章',
    content: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧,这是的test1专栏，有一段非常有意思的简介，可以更新一下欧这是的test1专栏，有一段非常有意思的简介，可以更新一下欧,这是的test1专栏，有一段非常有意思的简介，可以更新一下欧这是的test1专栏，有一段非常有意思的简介，可以更新一下欧,这是的test1专栏，有一段非常有意思的简介，可以更新一下欧这是的test1专栏，有一段非常有意思的简介，可以更新一下欧,这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    image: 'https://cdn2.thecatapi.com/images/b3h.jpg',
    createdAt: '1992-12-12 12:11:11',
    columnId: 1
  },
  {
    id: 2,
    title: '第二篇文章',
    content: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧,这是的test1专栏，有一段非常有意思的简介，可以更新一下欧这是的test1专栏，有一段非常有意思的简介这是的test1专栏，有一段非常有意思的简介，可以更新一下欧,这是的test1专栏，有一段非常有意思的简介，可以更新一下欧这是的test1专栏，有一段非常有意思的简介，可以更新一下欧,这是的test1专栏，有一段非常有意思的简介，可以更新一下欧这是的test1专栏，有一段非常有意思的简介，可以更新一下欧,这是的test1专栏，有一段非常有意思的简介，可以更新一下欧这是的test1专栏，有一段非常有意思的简介，可以更新一下欧,这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    createdAt: '1992-12-12 12:11:11',
    columnId: 1
  },
  {
    id: 3,
    title: '第三篇文章',
    content: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧,这是的test1专栏，有一段非常有意思的简介，可以更新一下欧这是的test1专栏，有一段非常有意思的简介，可以更新一下欧,这是的test1专栏，有一段非常有意思的简介，可以更新一下欧这是的test1专栏，有一段非常有意思的简介，可以更新一下欧,这是的test1专栏，有一段非常有意思的简介，可以更新一下欧这是的test1专栏，有一段非常有意思的简介，可以更新一下欧,这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    image: 'https://cdn2.thecatapi.com/images/d6a.jpg',
    createdAt: '1992-12-12 12:11:11',
    columnId: 1
  },
]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      