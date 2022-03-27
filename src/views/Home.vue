<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      v-for="(post, index) in sampleBlogPost"
      :key="index"
      :post="post"
    />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
export default {
  name: "Home",
  components: { BlogPost },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "this is a filter title",
          blogHTML: "this is a filter blog post title",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "this is a filter title",
          blogHTML: "this is a filter blog post title",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
};
</script>
