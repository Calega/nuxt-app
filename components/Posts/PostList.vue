<template >
    <section class="posts" >
        <PostPreview id = "1" 
                    thumbnail = "https://www.businessnewsdaily.com/images/i/000/015/216/original/salesforce.png"
                    title = "First post"
                    previewText = "This is my first post"
                    :is-admin="isAdmin" />
    </section>
</template>

<script>

import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}

</script>

<style scoped>
    .posts {
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>