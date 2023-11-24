const path = {
  home() {
    return '/';
  },
  topicShow(slug: string) {
    return `/topics/${slug}`;
  },
  postCreate(slug: string) {
    return `/topics/${slug}/posts/new`;
  },
  postShow(slug: string, topicId: string) {
    return `/topics/${slug}/posts/${topicId}`;
  },
};

export default path;
